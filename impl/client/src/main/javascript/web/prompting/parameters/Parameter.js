/*! ******************************************************************************
 *
 * Pentaho
 *
 * Copyright (C) 2024 by Hitachi Vantara, LLC : http://www.pentaho.com
 *
 * Use of this software is governed by the Business Source License included
 * in the LICENSE.TXT file.
 *
 * Change Date: 2029-07-20
 ******************************************************************************/


/**
 * The Parameter Class
 *
 * @name Parameter
 * @class
 * @property {string} name The name of the parameter
 * @property {string} type The java class name describing the type of the parameter
 * @property {boolean} list {true} if the parameter is a list, {false} otherwise
 * @property {boolean} mandatory {true} if the parameter is mandatory, {false} otherwise
 * @property {boolean} multiSelect {true} if the parameter is a multi select, {false} otherwise
 * @property {boolean} strict {true} if the parameter is strict, {false} otherwise
 * @property {string} timezoneHint The timezone of the parameter
 * @property {object|string} attributes Hash of string for the remaining parameter attributes
 * @property {Array|ParameterValue} values The array of possible values of the parameter
 */
define(['common-ui/jquery-clean'], function ($) {
  return function () {
    return {
      name: undefined,
      type: undefined,
      list: undefined,
      mandatory: undefined,
      multiSelect: undefined,
      strict: undefined,
      timezoneHint: undefined,
      attributes: {},
      values: [],

      /**
       * Checks if the value provided is selected in this parameter
       *
       * @name Parameter#isSelectedValue
       * @method
       * @param {Object} value Value to search for
       * @return {Boolean} true if this parameter contains a selection whose value = {value}
       */
      isSelectedValue: function (value) {
        var selected = false;
        $.each(this.values, function (i, v) {
          if (v.selected) {
            if (value === v.value) {
              selected = true;
              return false; // break
            }
          }
        });
        return selected;
      },

      /**
       * Determine if any of our values are selected (selected = true)
       *
       * @name Parameter#hasSelection
       * @method
       * @return {Boolean} {true} if any value is selected, {false} otherwise
       */
      hasSelection: function () {
        var s = false;
        $.each(this.values, function (i, v) {
          if (v.selected) {
            s = true;
            return false; // break
          }
        });
        return s;
      },

      /**
       * Obtains an array with the values of the selected ParameterValue objects.
       *
       * @name Parameter#getSelectedValuesValue
       * @method
       * @return {Array|Object} Array with the values selected
       */
      getSelectedValuesValue: function () {
        var selected = [];
        $.each(this.values, function (i, val) {
          if (val.selected) {
            selected.push(val.value);
          }
        });
        return selected;
      }
    };
  }
});
