"use server"

import createClient from "@/utils/supabase/server"
import { redirect } from "next/navigation"


export const getAllPost = async () => {
    const supabase = await createClient()
    const { data, error } = await supabase
    .from("jobs")
    .select(
      "id, job_title, company_name, location, applied_date, application_url, salary"
    );

    if (error) {
        console.error("Error fetching posts:", error)
        return []
    }

    return data
}

export const createPost = async (prev, formData) => {
    const supabase = await createClient()
    
    const formFields = {
        job_title: formData.get('job_title'),
        company_name: formData.get('company_name'),
        location: formData.get('location'),
        applied_date: formData.get('applied_date'),
        application_url: formData.get('application_url'),
        salary: formData.get('salary')
    }

    const payload = {
        ...formFields,
    }

    const {data, error} = await supabase.from('jobs').insert(payload).select().single()

    console.log(data, error)


    if (error) {
        return {
            error: error.message,
            formFields
        }
    }

    redirect('/')
}
