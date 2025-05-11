export const useLanguageSwitcher = () => {
    const { locale, setLocale } = useI18n()
    const cookieLocale = useCookie('locale')

    const languagesList = [
        {
            name: 'EN',
            code: 'en',
        },
        {
            name: "O'Z",
            code: 'uz',
        },
        {
            name: 'RU',
            code: 'ru',
        },
    ]

    const currentLanguage = computed(() =>
        languagesList.find((lang) => lang.code === locale.value)
    )

    function changeLocale(_locale: string) {
        setLocale(_locale)
        cookieLocale.value = _locale
    }

    return { currentLanguage, languagesList, changeLocale }
}
