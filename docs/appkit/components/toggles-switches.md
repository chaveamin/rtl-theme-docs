---
description: ساخته شده با استفاده از سیستم سویچ بوت استرپ
---

# سویچ ها

**[مثال های بوت استرپ](https://getbootstrap.com/docs/5.3/forms/checks-radios/#switches)**

سویچ‌ها، المان های اینپوت هستند که میتوانند برای تغییر محتوا یا تغییر وضعیت در اینپوت ها استفاده شوند. سویچ ها تحت تأثیر ویژگی `checked` قرار میگیرند، دقیقاً مانند یک چک باکس.\
اول از همه، اجازه دهید سویچ های اصلی موجود را به شما نشان دهیم. ما از سویچ های سبک iOS و اندروید استفاده میکنیم. بیایید ساختار آنها را توضیح دهیم، و سپس میتوانیم به موارد استفاده پیچیده تری برای آنها برسیم.

```html showLineNumbers
<div
  class="d-flex no-effect"
  data-trigger-switch="toggle-id-1"
  data-bs-toggle="collapse"
  href="#collapseExample1"
  role="button"
  aria-expanded="false"
  aria-controls="collapseExample1">
  <div class="pt-1">
    <h5 class="font-600">Toggle Trigger</h5>
  </div>
  <div class="ms-auto me-4 pe-2">
    <div class="custom-control BRAND-switch">
      <input type="checkbox" class="BRAND-input" id="toggle-id-1" />
      <label class="custom-control-label" for="toggle-id-1"></label>
    </div>
  </div>
</div>
<div class="collapse" id="collapseExample1">
  <!-- 

    -->
</div>
```

اگر میخواهید از این دکمه برای تغییر محتوا استفاده کنید، محتوا اینجا قرار میگیرد. در غیر این صورت، خطوط 19 تا 26 را به طور کامل حذف کنید و خط 4، خط 7 و خط 8 را نیز حذف کنید. همچنین، href="#collapseExample1" را با href="#" جایگزین کنید. پس از انجام این کار، دکمه مانند یک چک باکس معمولی عمل خواهد کرد.

اولاً، سویچ هایی که در این مثال استفاده کردیم، با استفاده از فلکس‌ باکس‌ تراز شده‌اند، که میتوانید با دنبال کردن [مستندات رسمی بوت استرپ](https://getbootstrap.com/docs/5.3/utilities/flex/) درباره آنها اطلاعات بیشتری کسب کنید.

توجه کنید که عنوان با استفاده از:\
`data-trigger-switch="toggle-id-1" | id="toggle-id-1" | for="toggle-id-1"`\
به سویچ متصل شده است. شما میتوانید تعداد بی نهایت سویچ ایجاد کنید و آنها را به یک دکمه جداگانه روی صفحه متصل کنید تا زمانی که ویژگی های بالا با یکدیگر مطابقت داشته باشند آنها را فعال میکند.

**خط 1** یک فلکس باکس برای سویچ ایجاد میکند تا آیکون و متن به درستی تراز شوند.
