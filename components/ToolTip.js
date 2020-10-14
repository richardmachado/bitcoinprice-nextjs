import styles from './ToolTip.module.css'

class ToolTip extends React.Component {

    render() {
      const {hoverLoc, activePoint} = this.props;
      const svgLocation = document.getElementsByClassName("linechart")[0].getBoundingClientRect();
  
      let placementStyles = {};
      let width = 100;
      placementStyles.width = width + 'px';
      placementStyles.left = hoverLoc + svgLocation.left - (width/2);
  
      return (
        <div className={styles.hover} style={ placementStyles }>
          <div className={styles.date}>{ activePoint.d }</div>
          <div className={styles.price}>{activePoint.p }</div>
        </div>
      )
    }
  }
  
  export default ToolTip;