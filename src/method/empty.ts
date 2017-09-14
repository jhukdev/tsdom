import { Instance } from '../instance';


/* -----------------------------------
 *
 * Empty
 *
 * -------------------------------- */

function empty() {

   const self: Instance = this;

   self.each(el => {
      
      while (el.firstChild) {

         el.removeChild(el.firstChild);
      
      }

   });

   return this;

};


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { empty };