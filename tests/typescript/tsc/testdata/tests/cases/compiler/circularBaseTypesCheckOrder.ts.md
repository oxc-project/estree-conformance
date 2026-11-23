__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 217
                },
                "typeArguments": null,
                "start": 209,
                "end": 217
              },
              "start": 207,
              "end": 217
            },
            "start": 206,
            "end": 217
          },
          "init": null,
          "definite": false,
          "start": 206,
          "end": 217
        }
      ],
      "declare": true,
      "start": 194,
      "end": 218
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 220
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 221,
          "end": 222
        },
        "optional": false,
        "computed": false,
        "start": 219,
        "end": 222
      },
      "directive": null,
      "start": 219,
      "end": 223
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 224,
          "end": 225
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 226,
          "end": 227
        },
        "optional": false,
        "computed": false,
        "start": 224,
        "end": 227
      },
      "directive": null,
      "start": 224,
      "end": 228
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 240,
        "end": 244
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Derived2",
            "optional": false,
            "typeAnnotation": null,
            "start": 253,
            "end": 261
          },
          "typeArguments": null,
          "start": 253,
          "end": 261
        }
      ],
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 269
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 271,
                "end": 277
              },
              "start": 269,
              "end": 277
            },
            "accessibility": null,
            "static": false,
            "start": 268,
            "end": 278
          }
        ],
        "start": 262,
        "end": 280
      },
      "declare": false,
      "start": 230,
      "end": 280
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 292,
        "end": 299
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 312
          },
          "typeArguments": null,
          "start": 308,
          "end": 312
        }
      ],
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 320
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 322,
                "end": 328
              },
              "start": 320,
              "end": 328
            },
            "accessibility": null,
            "static": false,
            "start": 319,
            "end": 329
          }
        ],
        "start": 313,
        "end": 331
      },
      "declare": false,
      "start": 282,
      "end": 331
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 343,
        "end": 351
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Derived",
            "optional": false,
            "typeAnnotation": null,
            "start": 360,
            "end": 367
          },
          "typeArguments": null,
          "start": 360,
          "end": 367
        }
      ],
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
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 375
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 377,
                "end": 383
              },
              "start": 375,
              "end": 383
            },
            "accessibility": null,
            "static": false,
            "start": 374,
            "end": 384
          }
        ],
        "start": 368,
        "end": 386
      },
      "declare": false,
      "start": 333,
      "end": 386
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 403,
                  "end": 410
                },
                "typeArguments": null,
                "start": 403,
                "end": 410
              },
              "start": 401,
              "end": 410
            },
            "start": 400,
            "end": 410
          },
          "init": null,
          "definite": false,
          "start": 400,
          "end": 410
        }
      ],
      "declare": true,
      "start": 388,
      "end": 411
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 412,
          "end": 413
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 414,
          "end": 415
        },
        "optional": false,
        "computed": false,
        "start": 412,
        "end": 415
      },
      "directive": null,
      "start": 412,
      "end": 416
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 416
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 194,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 202,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 209,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 230,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 240,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 245,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 253,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 271,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 282,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 292,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 300,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 308,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 322,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 333,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 343,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 352,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 360,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 377,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 388,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 396,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 403,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416
  }
]
```
