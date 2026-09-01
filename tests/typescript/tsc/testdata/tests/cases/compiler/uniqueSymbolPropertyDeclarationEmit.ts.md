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
            "name": "Op",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 9
          },
          "start": 7,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./op",
        "raw": "'./op'",
        "start": 15,
        "end": 21
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 22
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Po",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 34
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Po",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 34
          },
          "importKind": "value",
          "start": 32,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./po",
        "raw": "'./po'",
        "start": 42,
        "end": 48
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 23,
      "end": 49
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 78
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Op",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 99,
                        "end": 101
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "or",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 102,
                        "end": 104
                      },
                      "optional": false,
                      "computed": false,
                      "start": 99,
                      "end": 104
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 107,
                      "end": 109
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 98,
                    "end": 109
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Po",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 116,
                        "end": 118
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ro",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 119,
                        "end": 121
                      },
                      "optional": false,
                      "computed": false,
                      "start": 116,
                      "end": 121
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 124,
                      "end": 126
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 115,
                    "end": 126
                  }
                ],
                "start": 92,
                "end": 130
              },
              "start": 85,
              "end": 131
            }
          ],
          "start": 81,
          "end": 133
        },
        "expression": false,
        "start": 66,
        "end": 133
      },
      "exportKind": "value",
      "start": 51,
      "end": 133
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 134
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
    "value": "Op",
    "start": 7,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 10,
    "end": 14
  },
  {
    "type": "String",
    "value": "'./op'",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Po",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 37,
    "end": 41
  },
  {
    "type": "String",
    "value": "'./po'",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 51,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 58,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 66,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 75,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "Op",
    "start": 99,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "or",
    "start": 102,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
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
    "value": ",",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "Po",
    "start": 116,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "ro",
    "start": 119,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133
  }
]
```
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
            "name": "Op",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "or",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 31,
                      "end": 33
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeOperator",
                        "operator": "unique",
                        "typeAnnotation": {
                          "type": "TSSymbolKeyword",
                          "start": 42,
                          "end": 48
                        },
                        "start": 35,
                        "end": 48
                      },
                      "start": 33,
                      "end": 48
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 22,
                    "end": 49
                  }
                ],
                "start": 18,
                "end": 51
              },
              "start": 16,
              "end": 51
            },
            "start": 14,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 51
        }
      ],
      "declare": true,
      "start": 0,
      "end": 52
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "Op",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 71
      },
      "exportKind": "value",
      "start": 54,
      "end": 72
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 73
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "Op",
    "start": 14,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "readonly",
    "start": 22,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "or",
    "start": 31,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 35,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 54,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 61,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "Op",
    "start": 69,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Po",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": true,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ro",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 38,
                        "end": 40
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "operator": "unique",
                          "typeAnnotation": {
                            "type": "TSSymbolKeyword",
                            "start": 49,
                            "end": 55
                          },
                          "start": 42,
                          "end": 55
                        },
                        "start": 40,
                        "end": 55
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 29,
                      "end": 56
                    }
                  ],
                  "start": 25,
                  "end": 58
                },
                "start": 23,
                "end": 58
              },
              "start": 21,
              "end": 58
            },
            "init": null,
            "definite": false,
            "start": 21,
            "end": 58
          }
        ],
        "declare": true,
        "start": 7,
        "end": 59
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 59
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 59
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
    "type": "Identifier",
    "value": "declare",
    "start": 7,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 15,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "Po",
    "start": 21,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "readonly",
    "start": 29,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "ro",
    "start": 38,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 42,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "symbol",
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
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  }
]
```
