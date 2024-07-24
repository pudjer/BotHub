import { Header, Logo, HeaderLangDropdown, HeaderNav, HeaderNavLink, HeaderNavDropdown, HeaderNavDropdownItem, BothubAggIcon, BusinessColoredIcon, BothubUIProvider, HeaderUserButton,
  Background,
  TgColoredIcon,
  Typography,
  DescriptionCard,
  Image,
  Button,
  Footer,
  FooterLogoLink,
  Link
 } from "@bothub-chat/ui"
import "@bothub-chat/ui"
function App() {


  return (
    
  <BothubUIProvider theme={{mode: "dark"}} globalStyle={{scale: "dashboard" }}>
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
            <div style={{maxWidth: 1290, margin: "auto"}}>
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

              <div className="fjMMpK">
                <DescriptionCard variant="quaternary" title="Создание уникальных текстов" text="Нужно написать резюме, курсовую, диплом или целую книгу, но не знаете, с чего начать? Опишите ChatGPT свою задачу - и он сгенерирует качественный текст в нужном формате. Теперь создание контента любого объема и сложности - это просто!"/>
                <DescriptionCard variant="quaternary" title="Решение сложных задач" text="Задачи по математике или программированию иногда кажутся неразрешимыми головоломками. Но не для ChatGPT! Он проанализирует проблему и предложит пошаговое решение. Вы быстро разберетесь в сложных концепциях благодаря его доступным объяснениям."/>
                <DescriptionCard variant="quaternary" title="Разработка и отладка кода" text="ChatGPT может помочь в написании и исправлении кода. Он проанализирует ваш код, найдет ошибки и предложит способы их исправления. Также ChatGPT способен самостоятельно писать код по вашим указаниям - к примеру, для создания веб-сайта или приложения."/>
                <DescriptionCard variant="quaternary" title="Перевод текстов между языками" text="ChatGPT отлично справляется с переводом текстов на десятки языков. Теперь вам не нужно тратить время на поиск переводчика - просто попросите ChatGPT, и он мгновенно переведет любой текст на нужный вам язык."/>
                <DescriptionCard variant="quaternary" title="Генерация идей" text="Затрудняетесь придумать оригинальный подарок или выбрать фильм на вечер? ChatGPT предложит интересные идеи подарков под любой бюджет и вкус. А также даст персональные рекомендации книг, фильмов, сериалов - основываясь на ваших предпочтениях."/>
                <DescriptionCard variant="quaternary" title="Виртуальный помощник в жизни" text="Не знаете, как приготовить новое блюдо или спланировать отпуск? Просто спросите ChatGPT! Он выступит в качестве виртуального помощника в повседневных задачах, предоставив полезную информацию и рекомендации в любой сфере жизни."/>
              </div>
              <Image src={"https://bothub.chat/_next/static/media/image.801bc7af.webp"} width={630} height={572}/>
              <div>
                <Typography variant="h2" align="left">
                  Генерация Изображений Через Midjourney и DALL-e
                </Typography>
                <Typography variant="body-m-regular" align="left">
                  BotHub предлагает два мощных генератора изображений - Midjourney и DALL-E. Наши передовые алгоритмы помогут вам воплотить в жизнь любую творческую идею. Начните генерировать изображения с помощью Midjourney и DALL-E прямо сейчас! Кликните на кнопку ниже, чтобы начать творить.
                </Typography>
                <Button>
                  Попробовать MidJourney
                </Button>
              </div>
            </div>
            <Footer logo={
              <div>
                <Logo/>
                <Typography align="left" variant="body-m-medium">
                Торговая Марка BotHub принадлежит
ООО “БотХаб”
                </Typography>
                <Link style={{color: "white"}}>
                  Пользовательское соглашение
                </Link>
                <Link>
                  <Image src={"data:image/webp;base64,UklGRloJAABXRUJQVlA4WAoAAAAwAAAAVgAANAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZBTFBIFgcAAAGgv237+Tbf1v3N0qZNw6bKVpt717mat7qdOtu2bdu27b0zOtu20dlrm/uH7zepFhETACB0txUKZPxy5PE59ioQhZ+wYt64kBnRBWEpuTJvIkiekOW/ZBN5IW/CSXJWbgga32AATl7yXAnIIHkybwwiJpqzqjN9y/5Dhw4cuvo+ewkA9e+nFw7t3bt396Z57RzNybeT5KK8wRHRKz8p2Ula+LIwANQ30XxWNTNzSdJUMo/Cs0nyqptEkSwLjvhCsn2GOS6SaknxPuRlHweglYibJTSvR8SnTswQXXCUqveNZObhjrF1T42UqPxZ9NgdaFM0156newD9vpPkfAEAooCWx9rOziK5Tinyf0/yZbuFBx0g9xD5vyLJ055Ax1+dcy2bj/2AxK8kOUKA2Gp0+RB132ySjQEIx0k+c/cJbhQLSY+nJLlNC9kIEwfk2kPyS59CcFtL8u8IQSRZaCnJV3KgEcmflWGh92OSr3oJ8NtHsk2ujSDJY6GQtX1BcrgFcPxLsg1wkuQcWBj2kDTt8YB64AeSP3xzzfYxxYeT5arJJP/XmcNkktcRYiJptKDSV/J1BHQjPlPcHbkfdlpE3p7agSTPlTYXQ5JBg0k+hVn1QJI822qnieLPY5CXslr7ftHSzEpmtKJGJ0nuMyOco6WmR5O8kYexsTrAre7s/6/+knqoM2MvmvWJ5F4zaGom4/iKvhEKIKSfKtc6MWNpAx8BgJV/pqg+ADj2Gj16oeg5Sb4bPXpkBRHOiDboAEBRdvB501dtrnlS/OHykf1HbmSL/AG4P9k339J5c+bMWfyihWit6O2ZgwdOPsokyQPI/ZUii8sDSHxigxy3SRftI7O/k/zy+fMPfvr0PFiuBuQyhQ1gkxNtn68Sfy7O7f6N5DYAtW8h5/UuAnD6RG4L7r31bqDBkJbh1/b6uIAMFebG91sNz3S7HAC20bVrxLgKcB5jImnqIeSeYhdpirDyFAQhLMg99bky+EMlasayxvDt9pff5cygd3Ar2XDWtUxKP1t0JVcy1y54RHK726ioHyusKxgVvp+rdXtVmvMevKox/Oz93bmw8cu3TEpeqG2ipAX2anOUruxWQ3h8Xv91XuxX7tuQ5M/rHpdqDDeNLZELtSn9ujkGkCbLjN/T5ZaZrti4CNq0iEjOSyDtAf/7TrhUY/gChOUCGl34+uPJhlY2dt3JkQ354qBJJMAmLO3O6tLmnv/Pt+FHz9wOgm25A5/u/r8qRQ4onYEyDl6ArhRyUTA4KyCPuUBeVizkXmH8LSD8zqQSjlF6K9dIqSce/lkMrpvFL6OVgNZZiXxpEzP02F/ynHuxz+yL2reAWtzgl5ryaHuhwqUlLsL6HucJPbPJjLm1fJFPXZ6Q5H57+W2avCUQUqu2f5m3h0tFlhhdVwIL+bdxzZQ7H99e/TPBThlqa2encUNRo30zRYi3McTVNcTR1c6huJVFcG87c2AkHHaS2yGF0JapZd2UEFJML6VKk9f7dAnvPGHy2BJpbeqlRPdskqptXq12g0ZlajVs1rR0dNPkBt26qC2T9DxP/gyQKlQirWZA7NuTpcqWGRYH1LsFYDW/mvoZNRqDNlgmd9AFKXUKuVqtN8gdIzRGa8ElRmujs0HOFenk7bKA17tbQDPuKtu56O0VKBwCAPU4E5BN/3rmU2N5sMHV09Vg5+Gj0LvJVbZ+eju1wd/JOzRQ6Wqns3U1Bhk1lkEWGgoA63gLCDs91N21vMHGMQJS34MAeHdukOhUqWWLOg1bt0ku0bVF1ZjkRuUbpdVpXDjOL2Zww7gGDRo1SSydEJkDadljEQBZyXZv0kvBDOsCEGCtcQxQ6t00akGQK+WO1oLMXqkuiyJalUKvcLaylSt1So06V4TbZgD9q/9lFqSIDCq7cKMh0Ojn5mhbzNsV+XquBRBgth5/GwB4jkxKiW5QITk2pnnDpGjvWvkr9NcjcxbW43IAUGm1Wk2RAJ1R6+ai1xpd8xfmsLNLDqwjzn4PFxXUcu38AdiMpOnLkb4BZuTJax5k83mCDSDU7R5YEPqTH9dsvJJNZkQNuJV1qrcrhLilv/6uTh5N8vPprTfIX0H5T51Bkt92NQ7SWQMoMj2Tb3/yYawVIFOowzpdpHh8/rO6RvJwICQ1LU9nXXlEHvnwZn4oJIX45ySb5D/4n8qYBum0l7xfrc0ncn+JWX9Na11FQOjRe2NQkJ3W0rQ5dOPfqbyc/r1Btc980USioDufJxdo07msJp8Wy/7T9L+vZJ1/wWjypGEMf/tsIUNG8W2RpD/MDC54ilf8GxCazZWFPpHtHP9wmWw9OazgYRJXYSoZU5bkaqTTZAjJfB/yDxB6p2EH39o1I/kYw8lE2ZRw/CO78BBGksySx/G+Hf6hLfthIslsddAmI/6xkVnkSvyLIw70dy4gVlA4IE4AAADwBACdASpXADUAPjEUiEKiISEXVAAgAwS0hDgAAGyUHz3TvnGV17VqYi8CQqIChUAA/ugzGvO0wB0b///2pxGP//5Mq8v/LN+vqIoAAAA="}/>
                </Link>
              </div>
              }>
            </Footer>
    </BothubUIProvider>
  )
}

export default App
