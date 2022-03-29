import { FC } from "react"
import { Helmet } from "react-helmet-async"
import Button from "../../components/Button/Button"
import Footer from "../../components/Footer/Footer"
import MainLayout from "../../layouts/MainLayout/MainLayout"
import Container from "../../components/Container/Container"
import LeftSection from "../../components/MainSections/LeftSection/LeftSection"
import RightSection from "../../components/MainSections/RightSection/RightSection"
import SliderList from "../../components/SliderBlock/Slider/Slider"
import { ButtonBgColor } from "../../components/Button/ButtonTypes"

import "./Main.scss"

const Main: FC = (): JSX.Element => {
  return (
    <div className="Main">
      <Helmet>
        <title>NFD</title>
      </Helmet>

      <LeftSection>
        <MainLayout>
          <main className="Main__main">
            <Container>
              <div className="Main__content">
                <p className="Main__tagline1">Каршеринг</p>
                <p className="Main__tagline2">Need for drive</p>
                <p className="Main__tagline3">Поминутная аренда авто твоего города</p>

                <div className="Main__btn">
                  <Button name="Забронировать" bgColor={ButtonBgColor.GREEN} />
                </div>
              </div>
            </Container>
          </main>
          <Footer />
        </MainLayout>
      </LeftSection>

      <RightSection>
        <SliderList />
      </RightSection>
    </div>
  )
}

export default Main
