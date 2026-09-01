__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "value": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 24,
              "end": 27
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 21,
            "end": 27
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "value": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 36,
              "end": 39
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 33,
            "end": 39
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 45,
              "end": 46
            },
            "value": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 48,
              "end": 51
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 45,
            "end": 51
          }
        ],
        "start": 15,
        "end": 54
      },
      "exportKind": "value",
      "start": 0,
      "end": 54
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 55
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 7,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 24,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 36,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 39,
    "end": 40
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 8
          },
          "start": 7,
          "end": 8
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 14,
        "end": 19
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "value": {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 30,
            "end": 33
          },
          "start": 27,
          "end": 33
        },
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "b",
            "raw": "\"b\"",
            "start": 35,
            "end": 38
          },
          "value": {
            "type": "Literal",
            "value": "b",
            "raw": "\"b\"",
            "start": 40,
            "end": 43
          },
          "start": 35,
          "end": 43
        }
      ],
      "importKind": "value",
      "start": 0,
      "end": 46
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 70,
          "end": 71
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [],
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
                    "start": 86,
                    "end": 87
                  },
                  "init": {
                    "type": "ImportExpression",
                    "source": {
                      "type": "Literal",
                      "value": "./a",
                      "raw": "\"./a\"",
                      "start": 97,
                      "end": 102
                    },
                    "options": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "with",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 114,
                            "end": 118
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 122,
                                  "end": 123
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "a",
                                  "raw": "\"a\"",
                                  "start": 125,
                                  "end": 128
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 122,
                                "end": 128
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Literal",
                                  "value": "b",
                                  "raw": "\"b\"",
                                  "start": 130,
                                  "end": 133
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "b",
                                  "raw": "\"b\"",
                                  "start": 135,
                                  "end": 138
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 130,
                                "end": 138
                              }
                            ],
                            "start": 120,
                            "end": 140
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 114,
                          "end": 140
                        }
                      ],
                      "start": 104,
                      "end": 147
                    },
                    "phase": null,
                    "start": 90,
                    "end": 148
                  },
                  "definite": false,
                  "start": 86,
                  "end": 148
                }
              ],
              "declare": false,
              "start": 80,
              "end": 149
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 155
              },
              "directive": null,
              "start": 154,
              "end": 156
            }
          ],
          "start": 74,
          "end": 158
        },
        "expression": false,
        "start": 55,
        "end": 158
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 48,
      "end": 158
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 158
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 9,
    "end": 13
  },
  {
    "type": "String",
    "value": "\"./a\"",
    "start": 14,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 20,
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
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 33,
    "end": 34
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 35,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 40,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 48,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 55,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 61,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 80,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "String",
    "value": "\"./a\"",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "with",
    "start": 114,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 125,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 128,
    "end": 129
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 130,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  }
]
```
