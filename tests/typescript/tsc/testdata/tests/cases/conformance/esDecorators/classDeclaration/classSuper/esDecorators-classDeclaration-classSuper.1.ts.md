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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 41
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
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 61
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 69
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 71,
                        "end": 74
                      },
                      "start": 71,
                      "end": 76
                    },
                    "start": 69,
                    "end": 76
                  },
                  "value": null,
                  "start": 62,
                  "end": 76
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 79,
                  "end": 83
                },
                "start": 77,
                "end": 83
              },
              "body": null,
              "expression": false,
              "start": 61,
              "end": 84
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 48,
            "end": 84
          }
        ],
        "start": 42,
        "end": 86
      },
      "abstract": false,
      "declare": true,
      "start": 23,
      "end": 86
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
            "name": "method",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 100
          },
          "init": {
            "type": "Literal",
            "value": "method",
            "raw": "\"method\"",
            "start": 103,
            "end": 111
          },
          "definite": false,
          "start": 94,
          "end": 111
        }
      ],
      "declare": false,
      "start": 88,
      "end": 112
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 118
          },
          "start": 114,
          "end": 118
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 126
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 139
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 163,
                      "end": 168
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 175
                    },
                    "optional": false,
                    "computed": false,
                    "start": 163,
                    "end": 175
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 163,
                  "end": 177
                },
                "directive": null,
                "start": 163,
                "end": 178
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 187,
                      "end": 192
                    },
                    "property": {
                      "type": "Literal",
                      "value": "method",
                      "raw": "\"method\"",
                      "start": 193,
                      "end": 201
                    },
                    "optional": false,
                    "computed": true,
                    "start": 187,
                    "end": 202
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 187,
                  "end": 204
                },
                "directive": null,
                "start": 187,
                "end": 205
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 214,
                      "end": 219
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 220,
                      "end": 226
                    },
                    "optional": false,
                    "computed": true,
                    "start": 214,
                    "end": 227
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 214,
                  "end": 229
                },
                "directive": null,
                "start": 214,
                "end": 230
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "TaggedTemplateExpression",
                  "tag": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 240,
                      "end": 245
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 246,
                      "end": 252
                    },
                    "optional": false,
                    "computed": false,
                    "start": 240,
                    "end": 252
                  },
                  "typeArguments": null,
                  "quasi": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 252,
                        "end": 254
                      }
                    ],
                    "expressions": [],
                    "start": 252,
                    "end": 254
                  },
                  "start": 240,
                  "end": 254
                },
                "directive": null,
                "start": 240,
                "end": 255
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "TaggedTemplateExpression",
                  "tag": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 264,
                      "end": 269
                    },
                    "property": {
                      "type": "Literal",
                      "value": "method",
                      "raw": "\"method\"",
                      "start": 270,
                      "end": 278
                    },
                    "optional": false,
                    "computed": true,
                    "start": 264,
                    "end": 279
                  },
                  "typeArguments": null,
                  "quasi": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 279,
                        "end": 281
                      }
                    ],
                    "expressions": [],
                    "start": 279,
                    "end": 281
                  },
                  "start": 264,
                  "end": 281
                },
                "directive": null,
                "start": 264,
                "end": 282
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "TaggedTemplateExpression",
                  "tag": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 291,
                      "end": 296
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 297,
                      "end": 303
                    },
                    "optional": false,
                    "computed": true,
                    "start": 291,
                    "end": 304
                  },
                  "typeArguments": null,
                  "quasi": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 304,
                        "end": 306
                      }
                    ],
                    "expressions": [],
                    "start": 304,
                    "end": 306
                  },
                  "start": 291,
                  "end": 306
                },
                "directive": null,
                "start": 291,
                "end": 307
              }
            ],
            "start": 146,
            "end": 313
          }
        ],
        "start": 140,
        "end": 315
      },
      "abstract": false,
      "declare": false,
      "start": 114,
      "end": 315
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 315
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
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 23,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 31,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 48,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 62,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 65,
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
    "value": "any",
    "start": 71,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 79,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 88,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 101,
    "end": 102
  },
  {
    "type": "String",
    "value": "\"method\"",
    "start": 103,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 115,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 119,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 127,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 135,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 163,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 169,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 187,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 192,
    "end": 193
  },
  {
    "type": "String",
    "value": "\"method\"",
    "start": 193,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 214,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 220,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 240,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 246,
    "end": 252
  },
  {
    "type": "Template",
    "value": "``",
    "start": 252,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 264,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 269,
    "end": 270
  },
  {
    "type": "String",
    "value": "\"method\"",
    "start": 270,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 278,
    "end": 279
  },
  {
    "type": "Template",
    "value": "``",
    "start": 279,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 291,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 297,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 303,
    "end": 304
  },
  {
    "type": "Template",
    "value": "``",
    "start": 304,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315
  }
]
```
