import React from 'react'
import Textfield from './Textfield'
import { BiSearch } from 'react-icons/bi'
import { useSelector } from 'react-redux'

export default function SearchBar() {

    const search_placeholder = useSelector(e => e?.languageSliceReducer?.languageData[0]?.header?.search_placeholder)

    return (
        <Textfield
            className="text-[6px]"

            // leftSection={<BiSearch size={16} className='' />}
            placeholder={search_placeholder}
        // disabled={true}
        />
    )
}
