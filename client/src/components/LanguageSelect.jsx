import { Select} from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLanguageThunk } from '../store/slices/languageSlice'

export default function LanguageSelect() {

    const [lang, setLang] = useState(localStorage?.getItem('lang'))


    const store = useSelector(e => e?.languageSliceReducer)

    const dispatch = useDispatch()

    const options = [
        // {
        //     label: "English",
        //     value: "en"
        // },
        // {
        //     label: "Spanish",
        //     value: "es"
        // },
        // {
        //     label: "Hindi",
        //     value: "hi"
        // },
        "English", "Spanish", "Hindi"
    ]

    useEffect(() => {

        // if (lang) {
        dispatch(fetchLanguageThunk(lang || options[0]))
        // }

    }, [lang])

    useEffect(() => {
        console.log(store)
    }, [store])



    return (
        <>
            <Select
                // label="Select Language"
                // placeholder="Select Language"
                allowDeselect={false}
                data={options}
                value={lang || options[0]}
                onChange={(value, b, c) => {
                    console.log(value, b, c)
                    localStorage.setItem('lang', value)
                    setLang(value)
                }}
            />
        </>
    )
}
