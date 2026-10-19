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
        "name": "Attributes",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 20,
                  "end": 24
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 27,
                    "end": 33
                  },
                  "start": 25,
                  "end": 33
                },
                "accessibility": null,
                "static": false,
                "start": 20,
                "end": 33
              }
            ],
            "start": 18,
            "end": 35
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSIndexSignature",
                "parameters": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "path",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTemplateLiteralType",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "$",
                              "cooked": "$"
                            },
                            "tail": false,
                            "start": 47,
                            "end": 51
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": ".",
                              "cooked": "."
                            },
                            "tail": false,
                            "start": 57,
                            "end": 61
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "$",
                              "cooked": "$"
                            },
                            "tail": true,
                            "start": 67,
                            "end": 70
                          }
                        ],
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 51,
                            "end": 57
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 61,
                            "end": 67
                          }
                        ],
                        "start": 47,
                        "end": 70
                      },
                      "start": 45,
                      "end": 70
                    },
                    "start": 41,
                    "end": 70
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 73,
                    "end": 80
                  },
                  "start": 71,
                  "end": 80
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 40,
                "end": 80
              }
            ],
            "start": 38,
            "end": 82
          }
        ],
        "start": 18,
        "end": 82
      },
      "declare": false,
      "start": 0,
      "end": 83
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "scope",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 106
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Attributes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 116,
                    "end": 126
                  },
                  "typeArguments": null,
                  "start": 116,
                  "end": 126
                },
                {
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
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 131,
                        "end": 137
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "operator": "readonly",
                          "typeAnnotation": {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSStringKeyword",
                                "start": 149,
                                "end": 155
                              },
                              {
                                "type": "TSRestType",
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "elementType": {
                                    "type": "TSUnknownKeyword",
                                    "start": 160,
                                    "end": 167
                                  },
                                  "start": 160,
                                  "end": 169
                                },
                                "start": 157,
                                "end": 169
                              }
                            ],
                            "start": 148,
                            "end": 170
                          },
                          "start": 139,
                          "end": 170
                        },
                        "start": 137,
                        "end": 170
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 131,
                      "end": 170
                    }
                  ],
                  "start": 129,
                  "end": 172
                }
              ],
              "start": 116,
              "end": 172
            },
            "start": 114,
            "end": 172
          },
          "start": 107,
          "end": 172
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 175,
          "end": 179
        },
        "start": 173,
        "end": 179
      },
      "body": null,
      "expression": false,
      "start": 84,
      "end": 180
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
            "name": "options",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 194
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 205
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "list",
                      "raw": "\"list\"",
                      "start": 208,
                      "end": 214
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 218,
                            "end": 220
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 222,
                            "end": 223
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 218,
                          "end": 223
                        }
                      ],
                      "start": 216,
                      "end": 225
                    }
                  ],
                  "start": 207,
                  "end": 226
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 199,
                "end": 226
              }
            ],
            "start": 197,
            "end": 228
          },
          "definite": false,
          "start": 187,
          "end": 228
        }
      ],
      "declare": false,
      "start": 181,
      "end": 229
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "scope",
          "optional": false,
          "typeAnnotation": null,
          "start": 230,
          "end": 235
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "options",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 243
          }
        ],
        "optional": false,
        "start": 230,
        "end": 244
      },
      "directive": null,
      "start": 230,
      "end": 245
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 245
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
    "value": "Attributes",
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
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 20,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 41,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Template",
    "value": "`$${",
    "start": 47,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 51,
    "end": 57
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 57,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 61,
    "end": 67
  },
  {
    "type": "Template",
    "value": "}$`",
    "start": 67,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 73,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 84,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 92,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "scope",
    "start": 101,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 107,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "Attributes",
    "start": 116,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 139,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 157,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 160,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 175,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 181,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 187,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 199,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 207,
    "end": 208
  },
  {
    "type": "String",
    "value": "\"list\"",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 218,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "scope",
    "start": 230,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 236,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  }
]
```
