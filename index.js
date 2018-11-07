/** @format */

import './src/Services/ReactOtron/ReactotronConfig';

import {AppRegistry, I18nManager, View, StatusBar } from 'react-native';
import BCAppDelegate from "./src/AppDelegate/BCAppDelegate";
import {name as appName} from './app.json';

import { Container,
    Content, Header, Left, Body,
    Right, Title, Tab, Tabs,
    ScrollableTab, Text, Button,
    Card, CardItem, Thumbnail,
    Icon, TabHeading, ListItem,
    StyleProvider, List, getTheme,
    Form, Item, Input, Footer } from 'native-base';
import { SegmentedView, Label } from 'teaset';

import I18n from "./src/Localization";
import BCWHeader from "./src/Components/BCWHeader";
import BCWHeaderTitle from "./src/Components/BCWHeaderTitle";

// UI Global
// status bar
global.StatusBar = StatusBar;

// View
global.Container = Container;
global.Content = Content;
global.View = View;

// Header
global.BCWHeader = BCWHeader;
global.BCWHeaderTitle = BCWHeaderTitle;
global.Header = Header;
global.Left = Left;
global.Body = Body;
global.Right = Right;
global.Title = Title;

// Tab
global.Tab = Tab;
global.Tabs = Tabs;
global.ScrollableTab = ScrollableTab;
global.TabHeading = TabHeading;
global.SegmentedView = SegmentedView;


// Card
global.Card = Card;
global.CardItem = CardItem;
global.Thumbnail = Thumbnail;

// TableView
global.ListItem = ListItem;
global.List = List;

// Style
global.getTheme = getTheme;
global.StyleProvider = StyleProvider;

// additional
global.Footer = Footer;
global.Text = Text;
global.Button = Button;
global.Icon = Icon;
global.Label = Label;

// Form
global.Input = Input;
global.Form = Form;
global.Item = Item;

// Utilities Global
I18nManager.forceRTL(false);
// localizations
global.I18n = I18n;
I18n.isRTL = false;
I18n.locale = "en";

AppRegistry.registerComponent(appName, () => BCAppDelegate);
