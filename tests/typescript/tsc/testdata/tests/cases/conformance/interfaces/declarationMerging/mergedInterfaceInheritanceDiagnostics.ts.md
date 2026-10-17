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
        "name": "NumberBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 28
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 30,
                "end": 36
              },
              "start": 28,
              "end": 36
            },
            "accessibility": null,
            "static": false,
            "start": 23,
            "end": 36
          }
        ],
        "start": 21,
        "end": 38
      },
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 59
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 67
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 69,
                "end": 75
              },
              "start": 67,
              "end": 75
            },
            "accessibility": null,
            "static": false,
            "start": 62,
            "end": 75
          }
        ],
        "start": 60,
        "end": 77
      },
      "declare": false,
      "start": 39,
      "end": 77
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Incompatible",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 101
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 120
          },
          "typeArguments": null,
          "start": 110,
          "end": 120
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 121,
        "end": 123
      },
      "declare": false,
      "start": 79,
      "end": 123
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Incompatible",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 146
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 147,
        "end": 149
      },
      "declare": false,
      "start": 124,
      "end": 149
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LaterBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 169
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 177
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 179,
                "end": 185
              },
              "start": 177,
              "end": 185
            },
            "accessibility": null,
            "static": false,
            "start": 172,
            "end": 185
          }
        ],
        "start": 170,
        "end": 187
      },
      "declare": false,
      "start": 150,
      "end": 187
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConflictingBases",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 214
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 233
          },
          "typeArguments": null,
          "start": 223,
          "end": 233
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 234,
        "end": 236
      },
      "declare": false,
      "start": 188,
      "end": 236
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassAndInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 261
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 269
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 272,
              "end": 274
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 264,
            "end": 275
          }
        ],
        "start": 262,
        "end": 277
      },
      "abstract": false,
      "declare": false,
      "start": 238,
      "end": 277
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IndexConstraint",
        "optional": false,
        "typeAnnotation": null,
        "start": 289,
        "end": 304
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 313,
                    "end": 319
                  },
                  "start": 311,
                  "end": 319
                },
                "start": 308,
                "end": 319
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 322,
                "end": 328
              },
              "start": 320,
              "end": 328
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 307,
            "end": 328
          }
        ],
        "start": 305,
        "end": 330
      },
      "declare": false,
      "start": 279,
      "end": 330
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 331
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
    "value": "NumberBase",
    "start": 10,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 23,
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
    "value": "number",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 39,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "StringBase",
    "start": 49,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 62,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 79,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "Incompatible",
    "start": 89,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 102,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "NumberBase",
    "start": 110,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 124,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "Incompatible",
    "start": 134,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 150,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "LaterBase",
    "start": 160,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 172,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 188,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "ConflictingBases",
    "start": 198,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 215,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "NumberBase",
    "start": 223,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 238,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "ClassAndInterface",
    "start": 244,
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
    "value": "value",
    "start": 264,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 272,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 279,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "IndexConstraint",
    "start": 289,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 308,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 313,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "number",
    "start": 322,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  }
]
```
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
        "name": "Incompatible",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 22
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              },
              "start": 30,
              "end": 38
            },
            "accessibility": null,
            "static": false,
            "start": 25,
            "end": 38
          }
        ],
        "start": 23,
        "end": 40
      },
      "declare": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LaterBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 60
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 79
          },
          "typeArguments": null,
          "start": 69,
          "end": 79
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 80,
        "end": 82
      },
      "declare": false,
      "start": 41,
      "end": 82
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConflictingBases",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 109
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "StringBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 128
          },
          "typeArguments": null,
          "start": 118,
          "end": 128
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 129,
        "end": 131
      },
      "declare": false,
      "start": 83,
      "end": 131
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConflictingBases",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 158
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 159,
        "end": 161
      },
      "declare": false,
      "start": 132,
      "end": 161
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassAndInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 190
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 209
          },
          "typeArguments": null,
          "start": 199,
          "end": 209
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 210,
        "end": 212
      },
      "declare": false,
      "start": 163,
      "end": 212
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IndexConstraint",
        "optional": false,
        "typeAnnotation": null,
        "start": 224,
        "end": 239
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 242,
              "end": 247
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 249,
                "end": 255
              },
              "start": 247,
              "end": 255
            },
            "accessibility": null,
            "static": false,
            "start": 242,
            "end": 255
          }
        ],
        "start": 240,
        "end": 257
      },
      "declare": false,
      "start": 214,
      "end": 257
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 257
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
    "value": "Incompatible",
    "start": 10,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 25,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 41,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "LaterBase",
    "start": 51,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 61,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "NumberBase",
    "start": 69,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 83,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "ConflictingBases",
    "start": 93,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 110,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "StringBase",
    "start": 118,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 132,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "ConflictingBases",
    "start": 142,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 163,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "ClassAndInterface",
    "start": 173,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 191,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "NumberBase",
    "start": 199,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 214,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "IndexConstraint",
    "start": 224,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 242,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 249,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 256,
    "end": 257
  }
]
```
