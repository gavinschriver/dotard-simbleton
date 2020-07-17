export const business = (businessObject) => 
{
` 
<section class=“business”>
    <h2 class=“business__name”>${businessObject.businessName}</h2>
    <div class=“business__address”>
${businessObject.addressFullStreet} 

${businessObject.addressCity} ${businessObject.addressStateCode} ${businessObject.addressZipCode}
  </div>
</section>
`
}
