__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "p",
                  "raw": "\"p\"",
                  "start": 7,
                  "end": 10
                },
                "start": 7,
                "end": 10
              },
              "start": 5,
              "end": 10
            },
            "start": 4,
            "end": 10
          },
          "init": {
            "type": "Literal",
            "value": "p",
            "raw": "\"p\"",
            "start": 13,
            "end": 16
          },
          "definite": false,
          "start": 4,
          "end": 16
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 23,
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
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 32
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 35,
                "end": 39
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 41
              },
              "optional": false,
              "computed": false,
              "start": 35,
              "end": 41
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 31,
            "end": 41
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 46,
            "end": 47
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 52,
            "end": 61
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "computed",
              "raw": "\"computed\"",
              "start": 67,
              "end": 77
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 13,
              "raw": "13",
              "start": 81,
              "end": 83
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 66,
            "end": 89
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 14,
              "raw": "14",
              "start": 95,
              "end": 97
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 89,
            "end": 97
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 103
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
                "start": 106,
                "end": 109
              },
              "expression": false,
              "start": 103,
              "end": 109
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 102,
            "end": 109
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 125
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 145,
                        "end": 151
                      },
                      "start": 143,
                      "end": 151
                    },
                    "start": 142,
                    "end": 151
                  },
                  "readonly": true,
                  "static": false,
                  "start": 126,
                  "end": 151
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 153,
                "end": 156
              },
              "expression": false,
              "start": 125,
              "end": 156
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 114,
            "end": 156
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 162
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 165,
                "end": 169
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 171
              },
              "optional": false,
              "computed": false,
              "start": 165,
              "end": 171
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 161,
            "end": 171
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "notEmitted",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 194
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 176,
            "end": 195
          }
        ],
        "start": 25,
        "end": 197
      },
      "abstract": false,
      "declare": false,
      "start": 17,
      "end": 197
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 204,
        "end": 205
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 220
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 212,
            "end": 221
          }
        ],
        "start": 206,
        "end": 223
      },
      "abstract": false,
      "declare": false,
      "start": 198,
      "end": 223
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 230,
        "end": 231
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 240,
        "end": 241
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 264
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 248,
            "end": 265
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 271
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 274,
                "end": 278
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "ka",
                "optional": false,
                "typeAnnotation": null,
                "start": 279,
                "end": 281
              },
              "optional": false,
              "computed": false,
              "start": 274,
              "end": 281
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 270,
            "end": 281
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 286,
              "end": 297
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ka",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 309,
                        "end": 315
                      },
                      "start": 307,
                      "end": 315
                    },
                    "start": 305,
                    "end": 315
                  },
                  "readonly": false,
                  "static": false,
                  "start": 298,
                  "end": 315
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 327,
                        "end": 332
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 327,
                      "end": 334
                    },
                    "directive": null,
                    "start": 327,
                    "end": 334
                  }
                ],
                "start": 317,
                "end": 340
              },
              "expression": false,
              "start": 297,
              "end": 340
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 286,
            "end": 340
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ki",
              "optional": false,
              "typeAnnotation": null,
              "start": 345,
              "end": 347
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 350,
                "end": 354
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "ka",
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 357
              },
              "optional": false,
              "computed": false,
              "start": 350,
              "end": 357
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 345,
            "end": 357
          }
        ],
        "start": 242,
        "end": 359
      },
      "abstract": false,
      "declare": false,
      "start": 224,
      "end": 359
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 359
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "String",
    "value": "\"p\"",
    "start": 7,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "String",
    "value": "\"p\"",
    "start": 13,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 17,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 23,
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
    "value": "a",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 35,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 52,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 66,
    "end": 67
  },
  {
    "type": "String",
    "value": "\"computed\"",
    "start": 67,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 81,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 93,
    "end": 94
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 95,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 114,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 126,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 133,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 145,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "type": "Keyword",
    "value": "this",
    "start": 165,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 176,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "notEmitted",
    "start": 184,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 198,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "type": "Keyword",
    "value": "public",
    "start": 212,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 224,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 232,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 248,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 256,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "z",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 274,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "ka",
    "start": 279,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 286,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 298,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "ka",
    "start": 305,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 309,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 327,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "ki",
    "start": 345,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 350,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "ka",
    "start": 355,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  }
]
```
