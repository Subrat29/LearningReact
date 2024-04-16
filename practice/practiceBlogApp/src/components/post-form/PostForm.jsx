import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, RTE, Select } from "..";
import configservice from '../../appwrite/config'
import fileservice from '../../appwrite/fileConfig'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm(
        {
            defaultValues: {
                title: post?.title || "No Title",
                slug: post?.$id || "",
                content: post?.content || "No content",
                status: post?.status || "active"
            }
        }
    )
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    console.log("postForm/Post: ", post);
    console.log("postForm/userData: ", userData);


    const submit = async (data) => {
        // update post
        if (post) {
            console.log("Update Post");
            const file = data.image[0] ? fileservice.updateImage(data.image[0]) : null
            if (file) {
                fileservice.deleteImage(fileservice.deleteImage(post.image))
            }
            const dbPost = await configservice.updatePost(post.$id,
                {
                    ...data,
                    image: file ? file.$id : undefined
                })
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }
        }
        else {
            // create post
            console.log("postForm/NewPost/data.image[0]: ", data.image[0]);

            const file = await data.image[0] ? fileservice.uploadImage(data.image[0]) : null

            console.log("postForm/NewPost/ImageUpload: ", file);

            if (file) {
                const fileId = file.$id
                data.image = fileId
                const dbPost = await configservice.createPost({
                    ...data,
                    userId: userData.$id
                })
                console.log("postForm/NewPost/createPost: ", dbPost);

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') {
            const slug = value.toLowerCase().replace(/ /g, '-')
            setValue('slug', slug)
            return slug
        }
        return ''
    })

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title, { shouldValidate: true }))
            }
        })
        return () => {
            subscription.unsubscribe()
        }
    }, [watch, slugTransform, setValue])


    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={fileservice.getImagePreview(post.image)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status :"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}

export default PostForm
