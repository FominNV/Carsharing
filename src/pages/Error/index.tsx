import { FC, MouseEvent, useCallback, useEffect } from 'react'
import { useTypedSelector } from 'store/selectors'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setError, setPageTitle } from 'store/common/actions'
import { ReactComponent as Sadness } from "assets/icons/Page404/sadness.svg"
import { PATHS } from 'routes/consts'

import "./styles.scss"

const Error: FC = () => {
  const { common } = useTypedSelector((state) => state)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onClickHandler = useCallback<EventFunc<MouseEvent>>(() => {
    dispatch(setError(null))
    navigate(PATHS.MAIN)
  }, [navigate, dispatch])

  useEffect(() => {
    dispatch(setPageTitle("NFD / Ошибка"))
  }, [])

  const error = common.error ? `Error: ${common.error.number}` : "Error: 404"
  const message = common.error ? common.error.message : "Страница не найдена!"

  return (
    <div className="Error">
      <div className="Error__content">
        <Sadness
          width="150px"
          height="150px"
        />
        <div className="Error__error">{error}</div>
        <div className="Error__message">{message}</div>
        <button
          onClick={onClickHandler}
          className="Error__btn"
        >На главную
        </button>
      </div>
    </div>
  )
}

export default Error
