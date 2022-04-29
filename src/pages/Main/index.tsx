import { FC, useEffect } from "react"
import { useTypedSelector } from "store/selectors"
import { useDispatch } from "react-redux"
import { setPageTitle } from "store/common/actions"
import Button from "components/Button"
import Footer from "components/Footer"
import MainLayout from "layouts/MainLayout"
import Container from "components/Container"
import LandSection from "components/MainSections/LandSection"
import SliderSection from "components/MainSections/SliderSection"
import Slider from "components/SliderBlock/Slider"
import classNames from "classnames"

import { ButtonBgColor } from "components/Button/types"
import { PATHS } from "routes/consts"

import "./styles.scss"

const Main: FC = () => {
  const { menuPopup } = useTypedSelector((state) => state.common)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPageTitle("NFD / Главная"))
  }, [dispatch])

  const mainClassname = classNames("Main", {
    "Main_scrollbar-none": menuPopup
  })

  return (
    <div className={mainClassname}>
      <LandSection>
        <MainLayout>
          <main className="Main__main">
            <Container>
              <div className="Main__content">
                <p className="Main__tagline1">Каршеринг</p>
                <p className="Main__tagline2">Need for drive</p>
                <p className="Main__tagline3">Поминутная аренда авто твоего города</p>

                <div className="Main__btn">
                  <Button
                    name="Забронировать"
                    bgColor={ButtonBgColor.GREEN}
                    navigatePath={PATHS.ORDER_PLACE}
                  />
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
}

export default Main
