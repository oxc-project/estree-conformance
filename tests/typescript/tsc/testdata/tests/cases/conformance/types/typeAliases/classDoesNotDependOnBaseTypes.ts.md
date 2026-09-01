__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringTree",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 18,
            "end": 24
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringTreeCollection",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 47
            },
            "typeArguments": null,
            "start": 27,
            "end": 47
          }
        ],
        "start": 18,
        "end": 47
      },
      "declare": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringTreeCollectionBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 79
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 90,
                    "end": 96
                  },
                  "start": 88,
                  "end": 96
                },
                "start": 87,
                "end": 96
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringTree",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 99,
                  "end": 109
                },
                "typeArguments": null,
                "start": 99,
                "end": 109
              },
              "start": 97,
              "end": 109
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 86,
            "end": 110
          }
        ],
        "start": 80,
        "end": 112
      },
      "abstract": false,
      "declare": false,
      "start": 49,
      "end": 112
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringTreeCollection",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 140
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringTreeCollectionBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 173
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 174,
        "end": 177
      },
      "abstract": false,
      "declare": false,
      "start": 114,
      "end": 177
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringTree",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 196
                },
                "typeArguments": null,
                "start": 186,
                "end": 196
              },
              "start": 184,
              "end": 196
            },
            "start": 183,
            "end": 196
          },
          "init": null,
          "definite": false,
          "start": 183,
          "end": 196
        }
      ],
      "declare": false,
      "start": 179,
      "end": 197
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 210
          },
          "prefix": true,
          "start": 202,
          "end": 210
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 215,
          "end": 223
        },
        "start": 202,
        "end": 223
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 232
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 233,
                  "end": 234
                },
                "optional": false,
                "computed": true,
                "start": 231,
                "end": 235
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 238,
                "end": 240
              },
              "start": 231,
              "end": 240
            },
            "directive": null,
            "start": 231,
            "end": 241
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 247
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 248,
                  "end": 249
                },
                "optional": false,
                "computed": true,
                "start": 246,
                "end": 250
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringTreeCollection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 277
                },
                "typeArguments": null,
                "arguments": [],
                "start": 253,
                "end": 277
              },
              "start": 246,
              "end": 277
            },
            "directive": null,
            "start": 246,
            "end": 278
          }
        ],
        "start": 225,
        "end": 280
      },
      "alternate": null,
      "start": 198,
      "end": 280
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 280
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "StringTree",
    "start": 5,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "StringTreeCollection",
    "start": 27,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 49,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "StringTreeCollectionBase",
    "start": 55,
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
    "value": "[",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "StringTree",
    "start": 99,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 114,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "StringTreeCollection",
    "start": 120,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 141,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "StringTreeCollectionBase",
    "start": 149,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": "var",
    "start": 179,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "StringTree",
    "start": 186,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 198,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 202,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 211,
    "end": 214
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 215,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 232,
    "end": 233
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 236,
    "end": 237
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 238,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 247,
    "end": 248
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 253,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "StringTreeCollection",
    "start": 257,
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
  }
]
```
