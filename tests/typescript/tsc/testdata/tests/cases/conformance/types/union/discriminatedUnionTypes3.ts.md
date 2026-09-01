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
        "name": "Correct",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 34
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "code",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 44
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 46,
                "end": 52
              },
              "start": 44,
              "end": 52
            },
            "accessibility": null,
            "static": false,
            "start": 40,
            "end": 52
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 64,
                  "end": 68
                },
                "start": 64,
                "end": 68
              },
              "start": 62,
              "end": 68
            },
            "accessibility": null,
            "static": false,
            "start": 54,
            "end": 68
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "err",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 73
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 75,
                "end": 84
              },
              "start": 73,
              "end": 84
            },
            "accessibility": null,
            "static": false,
            "start": 70,
            "end": 84
          }
        ],
        "start": 37,
        "end": 86
      },
      "declare": false,
      "start": 22,
      "end": 86
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Err",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 95
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "err",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 104
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 106,
                    "end": 109
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " is wrong!",
                      "cooked": " is wrong!"
                    },
                    "tail": true,
                    "start": 115,
                    "end": 127
                  }
                ],
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 109,
                    "end": 115
                  }
                ],
                "start": 106,
                "end": 127
              },
              "start": 104,
              "end": 127
            },
            "accessibility": null,
            "static": false,
            "start": 101,
            "end": 127
          }
        ],
        "start": 98,
        "end": 129
      },
      "declare": false,
      "start": 87,
      "end": 129
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeReturnType",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 149
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Correct",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 159
            },
            "typeArguments": null,
            "start": 152,
            "end": 159
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Err",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 165
            },
            "typeArguments": null,
            "start": 162,
            "end": 165
          }
        ],
        "start": 152,
        "end": 165
      },
      "declare": false,
      "start": 130,
      "end": 166
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
            "name": "example",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SomeReturnType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 183,
                  "end": 197
                },
                "typeArguments": null,
                "start": 183,
                "end": 197
              },
              "start": 181,
              "end": 197
            },
            "start": 174,
            "end": 197
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 200,
              "end": 202
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SomeReturnType",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 220
              },
              "typeArguments": null,
              "start": 206,
              "end": 220
            },
            "start": 200,
            "end": 220
          },
          "definite": false,
          "start": 174,
          "end": 220
        }
      ],
      "declare": false,
      "start": 168,
      "end": 221
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "example",
            "optional": false,
            "typeAnnotation": null,
            "start": 227,
            "end": 234
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "err",
            "optional": false,
            "typeAnnotation": null,
            "start": 235,
            "end": 238
          },
          "optional": false,
          "computed": false,
          "start": 227,
          "end": 238
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 243,
          "end": 252
        },
        "start": 227,
        "end": 252
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "example",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 264
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property",
                "optional": false,
                "typeAnnotation": null,
                "start": 265,
                "end": 273
              },
              "optional": false,
              "computed": false,
              "start": 257,
              "end": 273
            },
            "directive": null,
            "start": 257,
            "end": 274
          }
        ],
        "start": 254,
        "end": 285
      },
      "alternate": null,
      "start": 223,
      "end": 285
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 285
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Correct",
    "start": 27,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 40,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 46,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 54,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 64,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 70,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 75,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 87,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "Err",
    "start": 92,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 101,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 106,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 109,
    "end": 115
  },
  {
    "type": "Template",
    "value": "} is wrong!`",
    "start": 115,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 130,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "SomeReturnType",
    "start": 135,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Correct",
    "start": 152,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "Err",
    "start": 162,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 168,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "example",
    "start": 174,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "SomeReturnType",
    "start": 183,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 203,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "SomeReturnType",
    "start": 206,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 223,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "example",
    "start": 227,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 235,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 239,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 243,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "example",
    "start": 257,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 265,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285
  }
]
```
