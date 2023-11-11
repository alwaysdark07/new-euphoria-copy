import { configureStore } from '@reduxjs/toolkit'
import createUserSlice from './slices/createUserSlice'
import languageSlice from './slices/languageSlice'

export const store = configureStore({
    reducer: {
        userSliceReducer: createUserSlice,
        languageSliceReducer: languageSlice,
    }
})





// ========== visualized store =============

let visualized_store =
{
    header: {},
    sidebar: {},
    dashboard: {

        carousel_data: [
            {
                image: "",
                info: ""
            }, {}, {}
        ],

        cards_below_carousel: [
            {
                image: "",
                info: ""
            }, {}, {}
        ],

        new_arrival: [
            {
                image: "",
                category: ""
            }, {}, {}
        ],

        big_saving_zone: [
            {
                image: "",
                info: "",
                icon: ""
            }, {}, {}
        ],

        hero_section: [
            {
                image: "",
                title: "",
                info: "",
            }, {}, {}
        ],

        categories_for_men: [
            {
                image: "",
                category: "",
                icon: ""
            }, {}, {}
        ],

        categories_for_women: [
            {
                image: "",
                category: "",
                icon: ""
            }, {}, {}
        ],

        top_brand_deals: [
            {
                info: "",
                logos: [
                    "", "", ""
                ]
            }
        ],

        in_the_limelight: [
            {
                image: "",
                info: "",
                price: "",
                icon: ""
            }, {}, {}
        ],

        feedback: [
            {
                user_image: "",
                user_name: "",
                user_feedback: "",
                user_rating: "",
            }, {}, {}
        ]
    },
    footer: {}
}
















