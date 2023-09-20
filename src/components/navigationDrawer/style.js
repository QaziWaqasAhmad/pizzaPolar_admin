import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  profileHeader: {
    "&.MuiListItem-root .MuiListItemAvatar-root .MuiAvatar-root": {
      height: "38px",
      width: "38px",
    },
    "&.MuiListItem-root .MuiListItemText-root .MuiListItemText-primary": {
      fontSize: "13px !important",
      color: "black",
    },
  },

  menuItemStyle: {
    fontSize: "12px !important",
  },

  navigationStyle: {
    "&.MuiListItem-root .MuiListItemIcon-root": {
      minWidth: "40px !important",
    },
    "&.MuiListItem-root .MuiListItemIcon-root .MuiIcon-root": {
      fontSize: "20px !important",
      color: "black",
    },
    "&.MuiListItem-root .MuiListItemText-root .MuiListItemText-primary": {
      fontSize: "13px !important",
      color: "black",
    },
  },

  drawerStyle: {
    background: "Red",
  },

  // Dashboard Cards Style

  customCard: {
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow: "none",
    backgroundImage: "none",
    borderRadius: "12px",
    // border: "none rgba(144, 202, 249, 0.46",
    color: "rgb(255, 255, 255)",
    overflow: "hidden",
    position: "relative",
  },
  activeBtn: {
    lineHeight: 1.75,
    minWidth: "64px",
    padding: "4px 10px",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    backgroundColor: "rgb(33, 150, 243)",
    boxShadow: "none",
    fontWeight: 500,
    borderRadius: "4px",
    color: "#fff",
    textTransform: "capitalize",
    fontFamily: "Roboto, sans-serif",
    margin: "0 5px",
    "&:hover": {
      background: "none",
    },
  },
  inactiveBtn: {
    lineHeight: 1.75,
    minWidth: "64px",
    padding: "4px 10px",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    backgroundColor: "transparent",
    boxShadow: "none",
    fontWeight: 500,
    borderRadius: "4px",
    color: "#fff",
    textTransform: "capitalize",
    fontFamily: "Roboto, sans-serif",
    margin: "0 5px",
    "&:hover": {
      background: "none",
    },
  },
  count: {
    margin: "14px 8px 6px 0px !important",
    lineHeight: "1.334em !important",
    fontFamily: "Roboto, sans-serif !important",
    fontSize: "2.125rem !important",
    fontWeight: 500,
  },
  avatarStyle: {
    background: "rgb(179, 157, 219) !important",
    cursor: "pointer !important",
    width: "22px !important",
    height: "22px !important",
    marginLeft: 10,
    fontSize: "1rem !important",
    color: "rgb(94, 53, 177) !important",
  },
  title: {
    margin: "0px",
    lineHeight: "1.334em",
    fontFamily: "Roboto, sans-serif",
    color: "rgb(179, 157, 219)",
    fontSize: "1rem",
    fontWeight: 600,
  },

  // ADD NEW GLoabl Button

  globalBtnStyle: {
    textTransform: "none !important",
    background: "#5769f3!important",
  },

  globalInputLabel: {
    fontSize: "13px !important",
    margin: "5px 0",
  },

  globalDialogContentStyle: {
    background: "red",
  },
}));

export default useStyles;
