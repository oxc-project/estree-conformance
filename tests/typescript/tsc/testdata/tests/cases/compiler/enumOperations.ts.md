__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Enum",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "None",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 16
            },
            "initializer": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 19,
              "end": 20
            },
            "computed": false,
            "start": 12,
            "end": 20
          }
        ],
        "start": 10,
        "end": 22
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 22
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
            "name": "enumType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 41
                },
                "typeArguments": null,
                "start": 37,
                "end": 41
              },
              "start": 35,
              "end": 41
            },
            "start": 27,
            "end": 41
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Enum",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 48
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "None",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 53
            },
            "optional": false,
            "computed": false,
            "start": 44,
            "end": 53
          },
          "definite": false,
          "start": 27,
          "end": 53
        }
      ],
      "declare": false,
      "start": 23,
      "end": 54
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
            "name": "numberType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 71,
                "end": 77
              },
              "start": 69,
              "end": 77
            },
            "start": 59,
            "end": 77
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 80,
            "end": 81
          },
          "definite": false,
          "start": 59,
          "end": 81
        }
      ],
      "declare": false,
      "start": 55,
      "end": 82
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
            "name": "anyType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 96,
                "end": 99
              },
              "start": 94,
              "end": 99
            },
            "start": 87,
            "end": 99
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 102,
            "end": 103
          },
          "definite": false,
          "start": 87,
          "end": 103
        }
      ],
      "declare": false,
      "start": 83,
      "end": 104
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "enumType",
          "optional": false,
          "typeAnnotation": null,
          "start": 107,
          "end": 115
        },
        "operator": "^",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numberType",
          "optional": false,
          "typeAnnotation": null,
          "start": 118,
          "end": 128
        },
        "start": 107,
        "end": 128
      },
      "directive": null,
      "start": 107,
      "end": 129
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numberType",
          "optional": false,
          "typeAnnotation": null,
          "start": 130,
          "end": 140
        },
        "operator": "^",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyType",
          "optional": false,
          "typeAnnotation": null,
          "start": 143,
          "end": 150
        },
        "start": 130,
        "end": 150
      },
      "directive": null,
      "start": 130,
      "end": 151
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "enumType",
          "optional": false,
          "typeAnnotation": null,
          "start": 154,
          "end": 162
        },
        "operator": "&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyType",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 172
        },
        "start": 154,
        "end": 172
      },
      "directive": null,
      "start": 154,
      "end": 173
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "enumType",
          "optional": false,
          "typeAnnotation": null,
          "start": 174,
          "end": 182
        },
        "operator": "|",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyType",
          "optional": false,
          "typeAnnotation": null,
          "start": 185,
          "end": 192
        },
        "start": 174,
        "end": 192
      },
      "directive": null,
      "start": 174,
      "end": 193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "enumType",
          "optional": false,
          "typeAnnotation": null,
          "start": 194,
          "end": 202
        },
        "operator": "^",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyType",
          "optional": false,
          "typeAnnotation": null,
          "start": 205,
          "end": 212
        },
        "start": 194,
        "end": 212
      },
      "directive": null,
      "start": 194,
      "end": 213
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyType",
          "optional": false,
          "typeAnnotation": null,
          "start": 215,
          "end": 222
        },
        "prefix": true,
        "start": 214,
        "end": 222
      },
      "directive": null,
      "start": 214,
      "end": 223
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "enumType",
          "optional": false,
          "typeAnnotation": null,
          "start": 224,
          "end": 232
        },
        "operator": "<<",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyType",
          "optional": false,
          "typeAnnotation": null,
          "start": 235,
          "end": 242
        },
        "start": 224,
        "end": 242
      },
      "directive": null,
      "start": 224,
      "end": 243
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "enumType",
          "optional": false,
          "typeAnnotation": null,
          "start": 244,
          "end": 252
        },
        "operator": ">>",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyType",
          "optional": false,
          "typeAnnotation": null,
          "start": 255,
          "end": 262
        },
        "start": 244,
        "end": 262
      },
      "directive": null,
      "start": 244,
      "end": 263
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "enumType",
          "optional": false,
          "typeAnnotation": null,
          "start": 264,
          "end": 272
        },
        "operator": ">>>",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyType",
          "optional": false,
          "typeAnnotation": null,
          "start": 276,
          "end": 283
        },
        "start": 264,
        "end": 283
      },
      "directive": null,
      "start": 264,
      "end": 284
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 284
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 5,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "None",
    "start": 12,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 23,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "enumType",
    "start": 27,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 44,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "None",
    "start": 49,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 55,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "numberType",
    "start": 59,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 71,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 83,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "anyType",
    "start": 87,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 96,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "enumType",
    "start": 107,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "numberType",
    "start": 118,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "numberType",
    "start": 130,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "anyType",
    "start": 143,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "enumType",
    "start": 154,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "anyType",
    "start": 165,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "enumType",
    "start": 174,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "anyType",
    "start": 185,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "enumType",
    "start": 194,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "anyType",
    "start": 205,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "anyType",
    "start": 215,
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
    "value": "enumType",
    "start": 224,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 233,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "anyType",
    "start": 235,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "enumType",
    "start": 244,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 253,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "anyType",
    "start": 255,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "enumType",
    "start": 264,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 273,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "anyType",
    "start": 276,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  }
]
```
