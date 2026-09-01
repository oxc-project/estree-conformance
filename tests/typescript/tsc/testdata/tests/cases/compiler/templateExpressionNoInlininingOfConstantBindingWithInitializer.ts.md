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
        "name": "Params",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 23
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 26,
                    "end": 32
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 35,
                    "end": 41
                  }
                ],
                "start": 26,
                "end": 41
              },
              "start": 24,
              "end": 41
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 41
          }
        ],
        "start": 14,
        "end": 43
      },
      "declare": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "example",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 61
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "parameters",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Params",
                "optional": false,
                "typeAnnotation": null,
                "start": 74,
                "end": 80
              },
              "typeArguments": null,
              "start": 74,
              "end": 80
            },
            "start": 72,
            "end": 80
          },
          "start": 62,
          "end": 80
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 94,
                        "end": 99
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 94,
                          "end": 99
                        },
                        "right": {
                          "type": "Literal",
                          "value": "123",
                          "raw": "'123'",
                          "start": 102,
                          "end": 107
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 94,
                        "end": 107
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 94,
                      "end": 107
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 109
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 112,
                  "end": 122
                },
                "definite": false,
                "start": 92,
                "end": 122
              }
            ],
            "declare": false,
            "start": 86,
            "end": 122
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 132,
                    "end": 135
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 140,
                    "end": 142
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 140
                  }
                ],
                "start": 132,
                "end": 142
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "345",
                "raw": "'345'",
                "start": 147,
                "end": 152
              },
              "start": 132,
              "end": 152
            },
            "start": 125,
            "end": 152
          }
        ],
        "start": 82,
        "end": 154
      },
      "expression": false,
      "start": 45,
      "end": 154
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "example2",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 173
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "parameters",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Params",
                "optional": false,
                "typeAnnotation": null,
                "start": 186,
                "end": 192
              },
              "typeArguments": null,
              "start": 186,
              "end": 192
            },
            "start": 184,
            "end": 192
          },
          "start": 174,
          "end": 192
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 206,
                        "end": 211
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 206,
                          "end": 211
                        },
                        "right": {
                          "type": "Literal",
                          "value": "123",
                          "raw": "'123'",
                          "start": 214,
                          "end": 219
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 206,
                        "end": 219
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 206,
                      "end": 219
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 221
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 234
                },
                "definite": false,
                "start": 204,
                "end": 234
              }
            ],
            "declare": false,
            "start": 198,
            "end": 234
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 244
                },
                "init": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 247,
                      "end": 250
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 255,
                      "end": 257
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 250,
                      "end": 255
                    }
                  ],
                  "start": 247,
                  "end": 257
                },
                "definite": false,
                "start": 243,
                "end": 257
              }
            ],
            "declare": false,
            "start": 237,
            "end": 258
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 269
            },
            "start": 261,
            "end": 270
          }
        ],
        "start": 194,
        "end": 272
      },
      "expression": false,
      "start": 156,
      "end": 272
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 272
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
    "value": "Params",
    "start": 5,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 18,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 45,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "example",
    "start": 54,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "parameters",
    "start": 62,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 86,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 94,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101
  },
  {
    "type": "String",
    "value": "'123'",
    "start": 102,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "parameters",
    "start": 112,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 125,
    "end": 131
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 132,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 135,
    "end": 140
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 140,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 143,
    "end": 146
  },
  {
    "type": "String",
    "value": "'345'",
    "start": 147,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 156,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "example2",
    "start": 165,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "parameters",
    "start": 174,
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
    "value": "Params",
    "start": 186,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 198,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 206,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 212,
    "end": 213
  },
  {
    "type": "String",
    "value": "'123'",
    "start": 214,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "parameters",
    "start": 224,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 237,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 247,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 250,
    "end": 255
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 255,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 261,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 268,
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
    "value": "}",
    "start": 271,
    "end": 272
  }
]
```
