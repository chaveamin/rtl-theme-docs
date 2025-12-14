---
description: ساخته شده با استفاده از سیستم collapse بوت استرپ.
sidebar_position: 12
---

# جمع شدنی ها(collapse)

المان های جمع شونده برای قرار دادن لیستی از لینک ها طراحی شده اند. اینها زمانی بسیار مفید هستند که اطلاعات فهرست شده زیادی برای یک موضوع واحد در دسترس داشته باشید. در این مثال، در داخل **component-collapse.html**، یک گروه لیست ایجاد شده است و منطق سیستم collapse بوت استرپ را اضافه شده است. با پیروی از منطق بعدی میتوانید همین کار را انجام دهید.

<!-- prettier-ignore -->
``` html
<a data-bs-toggle="collapse" href="#collapse-1"><!-- Collapse Trigger is Here --></a>        
<div class="collapse" id="collapse-1"><!-- I will appear when you tap the trigger--></div>
```

هر المانی را میتوان جمع کرد، به شرطی که `data-bs-toggle="collapse"` را در کد خود داشته باشید، و کلاس بر روی چیزی که هنگام فشار دادن دکمه نشان داده میشود جمع شود و مطمئن شوید که `href="UNIQUE_NAME"` خود را در کد با آی دی `"UNIQUE_NAME"` در المانی که هنگام فشار دادن دکمه نشان داده میشود یکسان است.

برای استفاده های پیشرفته تر به [مستندات بوت استرپ](https://getbootstrap.com/docs/5.3/components/collapse/) مراجعه کنید.
