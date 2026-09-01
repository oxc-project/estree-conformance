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
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 17
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 18,
            "end": 19
          }
        ],
        "start": 17,
        "end": 20
      },
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
              "start": 27,
              "end": 32
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 35
                },
                "typeArguments": null,
                "start": 34,
                "end": 35
              },
              "start": 32,
              "end": 35
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
            "start": 27,
            "end": 36
          }
        ],
        "start": 21,
        "end": 38
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 38
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "maybeBox",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 65,
                "end": 72
              },
              "start": 63,
              "end": 72
            },
            "start": 55,
            "end": 72
          },
          "init": null,
          "definite": false,
          "start": 55,
          "end": 72
        }
      ],
      "declare": true,
      "start": 41,
      "end": 73
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "maybeBox",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 83
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "typeAnnotation": null,
          "start": 95,
          "end": 98
        },
        "start": 75,
        "end": 98
      },
      "directive": null,
      "start": 75,
      "end": 99
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "maybeBox",
          "optional": false,
          "typeAnnotation": null,
          "start": 107,
          "end": 115
        },
        "operator": "instanceof",
        "right": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 130
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 131,
                "end": 137
              }
            ],
            "start": 130,
            "end": 138
          },
          "start": 127,
          "end": 138
        },
        "start": 107,
        "end": 138
      },
      "directive": null,
      "start": 107,
      "end": 139
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "maybeBox",
          "optional": false,
          "typeAnnotation": null,
          "start": 149,
          "end": 157
        },
        "operator": "instanceof",
        "right": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 173
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 174,
                "end": 180
              }
            ],
            "start": 173,
            "end": 181
          },
          "start": 170,
          "end": 181
        },
        "start": 149,
        "end": 182
      },
      "directive": null,
      "start": 149,
      "end": 183
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "maybeBox",
          "optional": false,
          "typeAnnotation": null,
          "start": 193,
          "end": 201
        },
        "operator": "instanceof",
        "right": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 218
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 219,
                "end": 225
              }
            ],
            "start": 218,
            "end": 226
          },
          "start": 215,
          "end": 226
        },
        "start": 193,
        "end": 228
      },
      "directive": null,
      "start": 193,
      "end": 229
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 243
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 244,
                "end": 250
              }
            ],
            "start": 243,
            "end": 251
          },
          "start": 240,
          "end": 251
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null,
          "start": 263,
          "end": 269
        },
        "start": 240,
        "end": 269
      },
      "directive": null,
      "start": 240,
      "end": 270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 281
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 282,
                "end": 288
              }
            ],
            "start": 281,
            "end": 289
          },
          "start": 278,
          "end": 289
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null,
          "start": 302,
          "end": 308
        },
        "start": 277,
        "end": 308
      },
      "directive": null,
      "start": 277,
      "end": 309
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 318,
            "end": 321
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 322,
                "end": 328
              }
            ],
            "start": 321,
            "end": 329
          },
          "start": 318,
          "end": 329
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null,
          "start": 343,
          "end": 349
        },
        "start": 316,
        "end": 349
      },
      "directive": null,
      "start": 316,
      "end": 350
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 356
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 19,
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
    "start": 27,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 41,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 49,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "maybeBox",
    "start": 55,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 65,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "maybeBox",
    "start": 75,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 84,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "maybeBox",
    "start": 107,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 116,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "maybeBox",
    "start": 149,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 158,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 170,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 174,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "maybeBox",
    "start": 193,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 202,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 215,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 240,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 244,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 252,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 278,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 282,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 291,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 302,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 318,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 322,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 332,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 343,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  }
]
```
