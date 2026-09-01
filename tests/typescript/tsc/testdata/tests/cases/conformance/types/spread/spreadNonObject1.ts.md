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
        "name": "S",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 63
      },
      "typeParameters": null,
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
            "start": 66,
            "end": 69
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 75,
            "end": 77
          }
        ],
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 69,
            "end": 75
          }
        ],
        "start": 66,
        "end": 77
      },
      "declare": false,
      "start": 57,
      "end": 78
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
            "start": 85,
            "end": 86
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 94
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": "4",
                            "raw": "\"4\"",
                            "start": 98,
                            "end": 101
                          }
                        ],
                        "start": 97,
                        "end": 102
                      },
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 106,
                            "end": 107
                          },
                          "typeArguments": null,
                          "start": 106,
                          "end": 107
                        },
                        "start": 106,
                        "end": 109
                      },
                      "start": 97,
                      "end": 109
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 114
                    },
                    "optional": false,
                    "computed": false,
                    "start": 96,
                    "end": 114
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 125,
                          "end": 126
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 140,
                                  "end": 141
                                },
                                "init": {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "SpreadElement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 149,
                                        "end": 150
                                      },
                                      "start": 146,
                                      "end": 150
                                    },
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 152,
                                        "end": 153
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": 6,
                                        "raw": "6",
                                        "start": 155,
                                        "end": 156
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 152,
                                      "end": 156
                                    }
                                  ],
                                  "start": 144,
                                  "end": 158
                                },
                                "definite": false,
                                "start": 140,
                                "end": 158
                              }
                            ],
                            "declare": false,
                            "start": 134,
                            "end": 159
                          }
                        ],
                        "start": 128,
                        "end": 163
                      },
                      "expression": false,
                      "start": 115,
                      "end": 163
                    }
                  ],
                  "optional": false,
                  "start": 96,
                  "end": 164
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 93,
                "end": 164
              }
            ],
            "start": 89,
            "end": 167
          },
          "definite": false,
          "start": 85,
          "end": 167
        }
      ],
      "declare": false,
      "start": 79,
      "end": 168
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 168
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 57,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 66,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 69,
    "end": 75
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 75,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 79,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 97,
    "end": 98
  },
  {
    "type": "String",
    "value": "\"4\"",
    "start": 98,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 103,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 111,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 115,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 134,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 146,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  }
]
```
