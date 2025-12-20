---
description: ساخته شده برای حداکثر انعطاف پذیری
sidebar_position: 32
---

# تب ها

از آنجایی که بوت استرپ سیستمی برای تب ارائه نمیدهد، ما یک سیستم بسیار ساده و کارآمد ساختیم که در آن از کد تا حد امکان ساده استفاده شده است.

<!-- prettier-ignore -->
```html showLineNumbers
<div class="content" id="tab-group-UNIQUE-1">
    <div class="tab-controls tabs-small tabs-rounded" data-highlight="bg-highlight">
        <a href="#" data-active data-bs-toggle="collapse" data-bs-target="#tab-UNIQUE-NUMBER-1">Tab 1</a>
        <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-UNIQUE-NUMBER-2">Tab 2</a>
        <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-UNIQUE-NUMBER-3">Tab 3</a>
    </div>
    <div class="clearfix mb-3"></div>
    <div data-bs-parent="#tab-group-UNIQUE-1" class="collapse show" id="tab-UNIQUE-NUMBER-1">
        <!-- Tab Content 1-->
    </div>
    <div data-bs-parent="#tab-group-UNIQUE-1" class="collapse" id="tab-UNIQUE-NUMBER-2">
        <!-- Tab Content 2 -->
    </div>
    <div data-bs-parent="#tab-group-UNIQUE-1" class="collapse" id="tab-UNIQUE-NUMBER-3">
        <!-- Tab Content 3 -->
    </div>  
</div>
```

**خط 1** کلاس محتوا است، میتواند هر div باشد. اما در نظر داشته باشید که باید هر مجموعه ای از تب ها را در یک div مستقل نگه دارید.

**خط 2** divی است که کنترل کننده های تب را نگه میدارد. برای ساختن تب با گوشه گرد میتوانید از `tabs-round` استفاده کنید. اندازه ها میتوانند `tabs-large` یا `tabs-small` باشند.

**خط 3 تا خط 5** دکمه های تب هستند. برای ایجاد موارد بیشتر میتوانید آن ها را کپی کنید. مطمئن شوید که `data-bs-target` را برای هر تب جدا نگه دارید.

**خط 7** شناور شدن دکمه های تب را از تأثیرگذاری بر محتوا متوقف میکند.

**خط 8** شناوری بین تب ها را پاک میکند و همچنین یک مارجین بین محتوای تب و دکمه های تب اضافه میکند. برای تغییر این مورد میتوانید از [کلاس های کمکی](/appkit/secondary-classes) استفاده کنید.

**خط 8 تا 16** محتوای تب هستند. اینها با استفاده از نام منحصر به فرد استفاده شده در خط 3 تا 5 به دکمه های جداگانه خود متصل میشوند و فقط به شناسه منحصر به فرد موجود در خط 1 پاسخ میدهند. `id="tab-group-unique-1` باید برای کل گروه تب های بالا یکسان باشد. `tab-unique-number` باید برای هر تب، جداگانه در داخل گروه خود باشد.
