__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 37
          },
          "init": null,
          "definite": false,
          "start": 35,
          "end": 37
        }
      ],
      "declare": false,
      "start": 29,
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 49,
                "end": 55
              },
              "start": 47,
              "end": 55
            },
            "start": 45,
            "end": 55
          },
          "init": null,
          "definite": false,
          "start": 45,
          "end": 55
        }
      ],
      "declare": false,
      "start": 39,
      "end": 56
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 65
          },
          "init": null,
          "definite": false,
          "start": 63,
          "end": 65
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c4",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 69
          },
          "init": null,
          "definite": false,
          "start": 67,
          "end": 69
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 75,
                "end": 81
              },
              "start": 74,
              "end": 81
            },
            "start": 71,
            "end": 81
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 81
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c6",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 85
          },
          "init": null,
          "definite": false,
          "start": 83,
          "end": 85
        }
      ],
      "declare": false,
      "start": 57,
      "end": 86
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 130
            },
            "init": null,
            "definite": false,
            "start": 129,
            "end": 130
          }
        ],
        "declare": false,
        "start": 123,
        "end": 130
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 134,
        "end": 136
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 138,
        "end": 141
      },
      "start": 119,
      "end": 141
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c8",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 186
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 189,
              "end": 190
            },
            "definite": false,
            "start": 184,
            "end": 190
          }
        ],
        "declare": false,
        "start": 178,
        "end": 190
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c8",
          "optional": false,
          "typeAnnotation": null,
          "start": 192,
          "end": 194
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 197,
          "end": 198
        },
        "start": 192,
        "end": 198
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "c8",
          "optional": false,
          "typeAnnotation": null,
          "start": 200,
          "end": 202
        },
        "start": 200,
        "end": 204
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 206,
        "end": 209
      },
      "start": 174,
      "end": 209
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c9",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 256
            },
            "init": null,
            "definite": false,
            "start": 254,
            "end": 256
          }
        ],
        "declare": false,
        "start": 248,
        "end": 256
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c9",
          "optional": false,
          "typeAnnotation": null,
          "start": 258,
          "end": 260
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 263,
          "end": 264
        },
        "start": 258,
        "end": 264
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 267,
        "end": 270
      },
      "start": 244,
      "end": 270
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c10",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 318
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 321,
              "end": 322
            },
            "definite": false,
            "start": 315,
            "end": 322
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c11",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 327
            },
            "init": null,
            "definite": false,
            "start": 324,
            "end": 327
          }
        ],
        "declare": false,
        "start": 309,
        "end": 327
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c10",
          "optional": false,
          "typeAnnotation": null,
          "start": 329,
          "end": 332
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 335,
          "end": 336
        },
        "start": 329,
        "end": 336
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 339,
        "end": 342
      },
      "start": 305,
      "end": 342
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 342
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 29,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 35,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 39,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 45,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 63,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 71,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 75,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 83,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 123,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 131,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 178,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "c8",
    "start": 184,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 187,
    "end": 188
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "c8",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 195,
    "end": 196
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "c8",
    "start": 200,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 244,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 248,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "c9",
    "start": 254,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "c9",
    "start": 258,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 261,
    "end": 262
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 305,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 309,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "c10",
    "start": 315,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 319,
    "end": 320
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "c11",
    "start": 324,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "c10",
    "start": 329,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 333,
    "end": 334
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 341,
    "end": 342
  }
]
```
