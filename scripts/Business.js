export const business = (businessObject) => {
return ` 
<section class=list--item>
    <h3 class=business__name>
    ${businessObject.companyName}
    </h3>
    <div class=business__address>
    ${businessObject.addressFullStreet} <br>
    ${businessObject.addressCity} ${businessObject.addressStateCode} ${businessObject.addressZipCode}
  </div>
</section>
`
};
