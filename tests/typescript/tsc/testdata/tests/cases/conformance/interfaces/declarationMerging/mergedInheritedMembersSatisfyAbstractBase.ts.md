__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 24
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSAbstractPropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 41
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 43,
                "end": 49
              },
              "start": 41,
              "end": 49
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 29,
            "end": 50
          }
        ],
        "start": 25,
        "end": 52
      },
      "abstract": true,
      "declare": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Broken",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 66
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 84
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 85,
        "end": 87
      },
      "abstract": false,
      "declare": false,
      "start": 54,
      "end": 87
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IGetters",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 158
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 166
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 168,
                "end": 174
              },
              "start": 166,
              "end": 174
            },
            "accessibility": null,
            "static": false,
            "start": 163,
            "end": 175
          }
        ],
        "start": 159,
        "end": 177
      },
      "declare": false,
      "start": 140,
      "end": 177
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Broken",
        "optional": false,
        "typeAnnotation": null,
        "start": 188,
        "end": 194
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IGetters",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 211
          },
          "typeArguments": null,
          "start": 203,
          "end": 211
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 212,
        "end": 214
      },
      "declare": false,
      "start": 178,
      "end": 214
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Broken",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 226
          },
          "typeArguments": null,
          "arguments": [],
          "start": 216,
          "end": 228
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 229,
          "end": 232
        },
        "optional": false,
        "computed": false,
        "start": 216,
        "end": 232
      },
      "directive": null,
      "start": 216,
      "end": 232
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IncorrectlyExtends",
        "optional": false,
        "typeAnnotation": null,
        "start": 240,
        "end": 258
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 267,
        "end": 276
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 277,
        "end": 279
      },
      "abstract": false,
      "declare": false,
      "start": 234,
      "end": 279
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IncorrectGetters",
        "optional": false,
        "typeAnnotation": null,
        "start": 290,
        "end": 306
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 311,
              "end": 314
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 316,
                "end": 322
              },
              "start": 314,
              "end": 322
            },
            "accessibility": null,
            "static": false,
            "start": 311,
            "end": 323
          }
        ],
        "start": 307,
        "end": 325
      },
      "declare": false,
      "start": 280,
      "end": 325
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IncorrectlyExtends",
        "optional": false,
        "typeAnnotation": null,
        "start": 336,
        "end": 354
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IncorrectGetters",
            "optional": false,
            "typeAnnotation": null,
            "start": 363,
            "end": 379
          },
          "typeArguments": null,
          "start": 363,
          "end": 379
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 380,
        "end": 382
      },
      "declare": false,
      "start": 326,
      "end": 382
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 382
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 0,
    "end": 8
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 9,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "BaseClass",
    "start": 15,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 29,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 38,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 54,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Broken",
    "start": 60,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 67,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "BaseClass",
    "start": 75,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 140,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "IGetters",
    "start": 150,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 178,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "Broken",
    "start": 188,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 195,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "IGetters",
    "start": 203,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 216,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "Broken",
    "start": 220,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 229,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 234,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "IncorrectlyExtends",
    "start": 240,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 259,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "BaseClass",
    "start": 267,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 280,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "IncorrectGetters",
    "start": 290,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 311,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 316,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 326,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "IncorrectlyExtends",
    "start": 336,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 355,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "IncorrectGetters",
    "start": 363,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 381,
    "end": 382
  }
]
```
