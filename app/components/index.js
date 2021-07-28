import React from 'react'
import Text from './text/Text'
import ButtonOpacity from './button-opacity/ButtonOpacity'
import ButtonHighlight from './button-highlight/ButtonHighlight'
import StatusBar from './status-bar/StatusBar'
import Header from './header/Header'
import Container from './container/Container'
import Drawer from './drawer/Drawer'
import Form from './form/Form'
import ErrorText from './text/ErrorText'
import SnackBar from './snack-bar/SnackBar'
import Loading from './loading/Loading'
import BottomTabs from './bottom-tabs/BottomTabs'
import Table from './table/Table'
const Skeleton = React.lazy(()=> import('react-native-skeleton-placeholder'))

export {
  Text,
  ButtonOpacity,
  ButtonHighlight,
  StatusBar,
  Header,
  Container,
  Drawer,
  Form,
  ErrorText,
  SnackBar,
  Loading,
  BottomTabs,
  Table,
  Skeleton,
}