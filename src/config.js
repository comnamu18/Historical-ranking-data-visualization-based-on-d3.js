const config = {
  // The coding mode of a data source.
  // Encoding is not recommended to be modified.
  // Instead, it is recommended to copy the contents of the CSV file produced by yourself to example.csv.
  // The encoding format of example.csv is supported by all languages.
  encoding: "UTF-8",

  // Maximum number of entries per time node
  max_number: 20,

  // Controls whether top-additional message text is displayed.
  showMessage: true,

  // Auto Sort by Time
  // Please ensure using standard datetime format (YYYY-MM-DD HH:MM) when this term is enabled!!!
  auto_sort: false,

  // Time Formatting
  timeFormat: "%Y-%m-%d",

  // To make the shortest bar at the top.
  reverse: false,

  // Types are distinguished by what fields
  //If it is a name, the type is turned off
  divide_by: "type",

  // Colors are distinguished by what fields
  divide_color_by: "name",

  // The value of the field corresponds to the value of its color
  // Can also be set in src/colors.js
  color: {
    Chinese: "#1177CC",
    Japanese: "#667788"
  },

  // Specify a set of color values to customize the color scheme for all Bar.Use default configuration if blank.
  color_palette: [],

  // Color Gradient: Color-Binding Growth Rate
  changeable_color: false,

  // Add function: Gradient colours used for different types of growth rates (dark → light)
  // If the item is false, then all the entries are in accordance with Color_range discoloration
  // If the item is true then change the color according to the color in src/color_ranges.js and default color plate becolor_range
  // A specific setup template see src/_color_ranges.js, rename it as color_ranges.js, and set it again
  divide_changeable_color_by_type: false,
  color_range: ["#ff7e5f", "#feb47b"],

  // left label
  itemLabel: "Left Label",

  // right label
  typeLabel: "Right Label",

  // Top item information horizontal location
  item_x: 250,

  // time interval between points
  interval_time: 1,

  // Text horizontal height above.
  text_y: -50,

  // right-hand transverse coordinates
  text_x: 1000,
  // displacement quantity
  offset: 350,

  // BarInfo will not be displayed for a bar smaller than Display_barInfo.
  // Hide barInfo if bar is shorter than barInfo
  display_barInfo: 0,

  // Whether to use Counter
  // Note! Use timer and type are not compatible at this time, i.e. cannot be turned on at the same time!
  // The counter will appear in the upper right corner, recording the duration of the current top of the list.
  use_counter: false,
  // The step length of each time node to the counter.
  // For example, the time-node date interval may be one week (7 days), so the STep value should be 7.
  step: 1,

  //////////////////////////////////////////////////////////////////////////////
  // formatted number
  // The number of displayed bits of the value is controlled.This is done primarily by modifying the middle number, if it is1 it retains a decimal number.
  // A comma is used at intervals of three digits.
  // '.2f' means keeping two decimals.
  format: ",.0f",

  // suffix
  postfix: "",

  // If you don't understand what this is doing, don't make any changes here.
  // inverse formatting function
  // Formatting operations can cause a problem with NaN.
  // This function reverses the formatted values into numbers that JS can recognize.
  deformat: function (val, postfix) {
    return Number(val.replace(postfix, "").replace(/\,/g, ""));
  },
  //////////////////////////////////////////////////////////////////////////////

  // The chart spans from left to right.
  // Note that left_margin does not include the left - handlabel. 
  // Smaller modifications cause the left - handlabel to not display
  left_margin: 250,
  right_margin: 150,
  top_margin: 180,
  bottom_margin: 0,

  // Do you want to open the Time tab?
  dateLabel_switch: true,
  // Time label coordinates.Recommend x:1000 y:50 to start, default location is x:null, y:null
  dateLabel_x: null,
  dateLabel_y: null,

  // Allows a bar larger than the average to rise when it disappears.
  allow_up: false,

  // All entries are up - for reverse charts, etc.
  always_up: false,

  // Sets the animation. If true, the new entry starts with 0.
  enter_from_0: true,

  // If all numbers are large, causing the gap to open, 
  // this opens causing the coordinate origin to change to (minimum) * 2 - (maximum).
  big_value: true,

  // Open this item if you want to use a semilog coordinate
  use_semilogarithmic_coordinate: false,

  // Barinfo is too long? Maybe we could try this.
  long: false,

  // How many time nodes will be delayed?
  wait: 0,

  // independently controlled switching animation speed multiplier
  update_rate: 1,

  // Turn on uniformity animation
  // animation:'linear',
  showLabel: true,

  // label X-axis position
  labelx: -10,

  use_img: true,

  // A picture path, a local picture, or a web picture.
  // It can also be configured in imgs.js.
  imgs: {
    item:
      "http://i1.hdslb.com/bfs/face/983034448f81f45f05956d0455a86fe0639d6a36.jpg",
    条目:
      "http://i1.hdslb.com/bfs/face/983034448f81f45f05956d0455a86fe0639d6a36.jpg",
    任意名称: "path/to/img"
  },

  // global background color
  background_color: "#FFFFFF",

  // Is a rectangular column a circular rectangle?
  rounded_rectangle: true,

  // DOES DOWN THE X-axis?
  show_x_tick: true,

  // limit bar info display length
  bar_name_max: 30
};
