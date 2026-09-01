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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 38
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 41,
                "end": 44
              },
              "expression": false,
              "start": 38,
              "end": 44
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 17,
            "end": 44
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "instance1",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 65
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 76
              },
              "typeArguments": null,
              "arguments": [],
              "start": 68,
              "end": 78
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 49,
            "end": 79
          }
        ],
        "start": 11,
        "end": 92
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 92
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Subclass",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 108
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 121
      },
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
              "name": "instance1_1",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 146
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 153,
                "end": 157
              },
              "typeArguments": null,
              "arguments": [],
              "start": 149,
              "end": 159
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 128,
            "end": 160
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "instance1_2",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 194
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Subclass",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 209
              },
              "typeArguments": null,
              "arguments": [],
              "start": 197,
              "end": 211
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 176,
            "end": 212
          }
        ],
        "start": 122,
        "end": 225
      },
      "abstract": false,
      "declare": false,
      "start": 94,
      "end": 225
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubclassOfSubclass",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 251
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Subclass",
        "optional": false,
        "typeAnnotation": null,
        "start": 260,
        "end": 268
      },
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
              "name": "instance2_1",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 293
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 300,
                "end": 304
              },
              "typeArguments": null,
              "arguments": [],
              "start": 296,
              "end": 306
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 275,
            "end": 307
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "instance2_2",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 341
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Subclass",
                "optional": false,
                "typeAnnotation": null,
                "start": 348,
                "end": 356
              },
              "typeArguments": null,
              "arguments": [],
              "start": 344,
              "end": 358
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 323,
            "end": 359
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "instance2_3",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 393
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "SubclassOfSubclass",
                "optional": false,
                "typeAnnotation": null,
                "start": 400,
                "end": 418
              },
              "typeArguments": null,
              "arguments": [],
              "start": 396,
              "end": 420
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 375,
            "end": 421
          }
        ],
        "start": 269,
        "end": 434
      },
      "abstract": false,
      "declare": false,
      "start": 227,
      "end": 434
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 434
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 17,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 27,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 49,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "instance1",
    "start": 56,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 68,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 94,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "Subclass",
    "start": 100,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 109,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 117,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 128,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "instance1_1",
    "start": 135,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 149,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 153,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 176,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "instance1_2",
    "start": 183,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 197,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "Subclass",
    "start": 201,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 227,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "SubclassOfSubclass",
    "start": 233,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 252,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "Subclass",
    "start": 260,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 275,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "instance2_1",
    "start": 282,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 296,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 300,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 323,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "instance2_2",
    "start": 330,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 344,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "Subclass",
    "start": 348,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 375,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "instance2_3",
    "start": 382,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 396,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "SubclassOfSubclass",
    "start": 400,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 433,
    "end": 434
  }
]
```
