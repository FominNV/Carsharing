import { FC } from "react"
import { Link } from "react-router-dom"

import Button from "components/Button"
import Footer from "components/Footer"
import MainLayout from "layouts/MainLayout"
import Container from "components/Container"
import LandSection from "components/MainSections/LandSection"
import SliderSection from "components/MainSections/SliderSection"
import Slider from "components/SliderBlock/Slider"

import { ButtonBgColor } from "components/Button/types"
import { PATHS } from "routes/consts"

import "./styles.scss"

const Main: FC = () => (
  <div className="Main">
    <LandSection>
      <MainLayout title="NFD">
        <main className="Main__main">
          <Container>
            <div className="Main__content">
              <p className="Main__tagline1">Каршеринг</p>
              <p className="Main__tagline2">Need for drive</p>
              <p className="Main__tagline3">Поминутная аренда авто твоего города</p>

              <div className="Main__btn">
                <Link to={PATHS.ORDER_PLACE}>
                  <Button
                    name="Забронировать"
                    bgColor={ButtonBgColor.GREEN}
                  />
                </Link>
              </div>
            </div>
          </Container>
        </main>
        <Footer />
      </MainLayout>
    </LandSection>

    <SliderSection>
      <Slider />
    </SliderSection>
  </div>
)

export default Main
