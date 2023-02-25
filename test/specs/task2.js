describe('User Open Application',() => {
  it('User can open diet meal apps ', async() => {
      await expect($('[id="com.fghilmany.dietmealapp:id/tv_header_desc"]')).toHaveText("Isi formulir untuk membuat/menambahkan user");      
  })
})

describe('User Submit Form Data Application',() => {
  it('User can input field name: Gusti Ramadhan', async() => {
      await $('[id="com.fghilmany.dietmealapp:id/et_name"]').setValue("Gusti Ramadhan");
  })
  it('User can input field weight: 73', async() => {
      await $('[text="Weight"]').setValue(73);
  })
  it('User can input field height: 174', async() => {
      await $('[text="Height"]').setValue(174);
  })
  it('User can click choose option gender: Male', async() => {
      await $('[id="com.fghilmany.dietmealapp:id/rb_male"]').click();
  })
  it('User can click button "NEXT"', async() => {
      await $('[id="com.fghilmany.dietmealapp:id/bt_next"]').click();
      await expect($('[id="com.fghilmany.dietmealapp:id/tv_header_desc"]')).toHaveText("Isi formulir untuk membuat/menambahkan user"); 
      await expect($('[id="com.fghilmany.dietmealapp:id/title_activity"]')).toHaveText("Aktivitas sehari-hari"); 
  })
})

describe('User Submit Form Activity',() => {
  it('User can choose option aktivitas sehari-hari', async() => {
      await $('[text="Sekolah, Kuliah, Kerja Kantor, dsj."]').click();
  })
  it('User can click button "SELESAI"', async() => {
      await $('[id="com.fghilmany.dietmealapp:id/bt_finish"]').click();
      await expect($('[text="Ready to some calories today?"]')).toHaveText("Ready to some calories today?");
  })  
})