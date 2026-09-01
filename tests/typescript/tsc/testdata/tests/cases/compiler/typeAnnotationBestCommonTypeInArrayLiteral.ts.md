__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IMenuItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 28
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 30,
                "end": 36
              },
              "start": 28,
              "end": 36
            },
            "accessibility": null,
            "static": false,
            "start": 26,
            "end": 37
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 46
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 48,
                "end": 54
              },
              "start": 46,
              "end": 54
            },
            "accessibility": null,
            "static": false,
            "start": 42,
            "end": 55
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "link",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 64
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 67,
                "end": 73
              },
              "start": 65,
              "end": 73
            },
            "accessibility": null,
            "static": false,
            "start": 60,
            "end": 74
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "classes",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 86
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 89,
                "end": 95
              },
              "start": 87,
              "end": 95
            },
            "accessibility": null,
            "static": false,
            "start": 79,
            "end": 96
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "text",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 105
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 108,
                "end": 114
              },
              "start": 106,
              "end": 114
            },
            "accessibility": null,
            "static": false,
            "start": 101,
            "end": 115
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "icon",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 124
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 127,
                "end": 133
              },
              "start": 125,
              "end": 133
            },
            "accessibility": null,
            "static": false,
            "start": 120,
            "end": 134
          }
        ],
        "start": 20,
        "end": 136
      },
      "declare": false,
      "start": 0,
      "end": 136
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "menuData",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IMenuItem",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 151,
                    "end": 160
                  },
                  "typeArguments": null,
                  "start": 151,
                  "end": 160
                },
                "start": 151,
                "end": 162
              },
              "start": 149,
              "end": 162
            },
            "start": 141,
            "end": 162
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "value": "id",
                      "raw": "\"id\"",
                      "start": 181,
                      "end": 185
                    },
                    "value": {
                      "type": "Literal",
                      "value": "ourLogo",
                      "raw": "\"ourLogo\"",
                      "start": 187,
                      "end": 196
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 181,
                    "end": 196
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "value": "type",
                      "raw": "\"type\"",
                      "start": 206,
                      "end": 212
                    },
                    "value": {
                      "type": "Literal",
                      "value": "image",
                      "raw": "\"image\"",
                      "start": 214,
                      "end": 221
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 206,
                    "end": 221
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "value": "link",
                      "raw": "\"link\"",
                      "start": 231,
                      "end": 237
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 239,
                      "end": 241
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 231,
                    "end": 241
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "value": "icon",
                      "raw": "\"icon\"",
                      "start": 251,
                      "end": 257
                    },
                    "value": {
                      "type": "Literal",
                      "value": "modules/menu/logo.svg",
                      "raw": "\"modules/menu/logo.svg\"",
                      "start": 259,
                      "end": 282
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 251,
                    "end": 282
                  }
                ],
                "start": 171,
                "end": 288
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "value": "id",
                      "raw": "\"id\"",
                      "start": 300,
                      "end": 304
                    },
                    "value": {
                      "type": "Literal",
                      "value": "productName",
                      "raw": "\"productName\"",
                      "start": 306,
                      "end": 319
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 300,
                    "end": 319
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "value": "type",
                      "raw": "\"type\"",
                      "start": 329,
                      "end": 335
                    },
                    "value": {
                      "type": "Literal",
                      "value": "default",
                      "raw": "\"default\"",
                      "start": 337,
                      "end": 346
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 329,
                    "end": 346
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "value": "link",
                      "raw": "\"link\"",
                      "start": 356,
                      "end": 362
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 364,
                      "end": 366
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 356,
                    "end": 366
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "value": "text",
                      "raw": "\"text\"",
                      "start": 376,
                      "end": 382
                    },
                    "value": {
                      "type": "Literal",
                      "value": "Product Name",
                      "raw": "\"Product Name\"",
                      "start": 384,
                      "end": 398
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 376,
                    "end": 398
                  }
                ],
                "start": 290,
                "end": 404
              }
            ],
            "start": 165,
            "end": 406
          },
          "definite": false,
          "start": 141,
          "end": 406
        }
      ],
      "declare": false,
      "start": 137,
      "end": 407
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 407
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "IMenuItem",
    "start": 10,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 26,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "link",
    "start": 60,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "classes",
    "start": 79,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 101,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 108,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "icon",
    "start": 120,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 137,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "menuData",
    "start": 141,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "IMenuItem",
    "start": 151,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "String",
    "value": "\"id\"",
    "start": 181,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "String",
    "value": "\"ourLogo\"",
    "start": 187,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 196,
    "end": 197
  },
  {
    "type": "String",
    "value": "\"type\"",
    "start": 206,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213
  },
  {
    "type": "String",
    "value": "\"image\"",
    "start": 214,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 221,
    "end": 222
  },
  {
    "type": "String",
    "value": "\"link\"",
    "start": 231,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 239,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 241,
    "end": 242
  },
  {
    "type": "String",
    "value": "\"icon\"",
    "start": 251,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 257,
    "end": 258
  },
  {
    "type": "String",
    "value": "\"modules/menu/logo.svg\"",
    "start": 259,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "String",
    "value": "\"id\"",
    "start": 300,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "String",
    "value": "\"productName\"",
    "start": 306,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 319,
    "end": 320
  },
  {
    "type": "String",
    "value": "\"type\"",
    "start": 329,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "String",
    "value": "\"default\"",
    "start": 337,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 346,
    "end": 347
  },
  {
    "type": "String",
    "value": "\"link\"",
    "start": 356,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 366,
    "end": 367
  },
  {
    "type": "String",
    "value": "\"text\"",
    "start": 376,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383
  },
  {
    "type": "String",
    "value": "\"Product Name\"",
    "start": 384,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  }
]
```
