import { Header, ThemeProvider, Logo, HeaderLangDropdown, HeaderNav, HeaderNavLink, HeaderNavDropdown, HeaderNavDropdownItem, BothubAggIcon, BusinessColoredIcon, AdaptiveProvider, BothubUIProvider, HeaderUserButton,
  Background,
  TgColoredIcon,
  Typography,
  
 } from "@bothub-chat/ui"
import "@bothub-chat/ui"
function App() {


  return (
    
    <BothubUIProvider>
        <ThemeProvider mode="dark">
          <Background/>
          <Header
            logo={<Logo/>}
            lang={<HeaderLangDropdown lang="RU" />}
            user={<HeaderUserButton>Авторизация</HeaderUserButton>}
            nav={
              <HeaderNav>
                <HeaderNavDropdown label="Продукты">
                  <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "normal", margin: "auto"}}>
                    <HeaderNavDropdownItem icon={<BothubAggIcon/>} title="Агрегатор нейросетей BotHub" text="ChatGPT на базе 3.5 и 4.0 версии OpenAI"/>
                    <HeaderNavDropdownItem icon={<TgColoredIcon/>} title="Telegram бот" text="Удобный бот в Telegram который всегда под рукой"/>
                    <HeaderNavDropdownItem icon={<BusinessColoredIcon/>} title="Бизнес бот" text="ChatGPT для эффективного решения бизнес задач"/>
                  </div>
                </HeaderNavDropdown>
                <HeaderNavLink icon='Пакеты'/>
                <HeaderNavLink icon='API'/>
                <HeaderNavLink icon='Блог'/>
              </HeaderNav>
            }/>
            <div>
              <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%"}}>
                <Typography variant="h1">
                  ChatGPT: ваш умный помощник
                </Typography>
                <Typography variant="body-m-medium">
                  Экспериментируйте с ChatGPT-4, Midjourney и Claude в одном месте. Без VPN и абонентской платы. Создавайте контент, обрабатывайте данные и получайте ответы на вопросы через удобный интерфейс!
                </Typography>
              </div>
            </div>
            <div style={{display: "flex", flexDirection: "column", }}/>
        </ThemeProvider>
    </BothubUIProvider>
  )
}

export default App
