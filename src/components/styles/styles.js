import { makeStyles } from '@mui/styles';
 
const styles = () => {
  return {
    listItemDrawer: {
      width: 300,
      border: "1px solid gray"
    },
    listItemDrawerText: {
      fontWeight: "bold",
      fontSize: "700",
    }
  };
};
 
const useStyles = makeStyles(styles);
export default useStyles; 