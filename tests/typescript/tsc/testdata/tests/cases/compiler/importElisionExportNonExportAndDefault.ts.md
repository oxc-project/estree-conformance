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
            "name": "MyFunction",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 17
          },
          "start": 7,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./MyComponent",
        "raw": "\"./MyComponent\"",
        "start": 23,
        "end": 38
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 39
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 41,
          "end": 51
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "msg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 56
                },
                "value": {
                  "type": "Literal",
                  "value": "Hello World",
                  "raw": "\"Hello World\"",
                  "start": 58,
                  "end": 71
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 53,
                "end": 71
              }
            ],
            "start": 52,
            "end": 72
          }
        ],
        "optional": false,
        "start": 41,
        "end": 73
      },
      "directive": null,
      "start": 41,
      "end": 74
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 76
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
    "value": "MyFunction",
    "start": 7,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 18,
    "end": 22
  },
  {
    "type": "String",
    "value": "\"./MyComponent\"",
    "start": 23,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "MyFunction",
    "start": 41,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 53,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "String",
    "value": "\"Hello World\"",
    "start": 58,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 73,
    "end": 74
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "msg",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              },
              "start": 26,
              "end": 34
            },
            "accessibility": null,
            "static": false,
            "start": 23,
            "end": 35
          }
        ],
        "start": 21,
        "end": 37
      },
      "declare": false,
      "start": 0,
      "end": 37
    },
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
              "name": "MyFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 62
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 71
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 71
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 68,
                      "end": 71
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyFunction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 75,
                        "end": 85
                      },
                      "typeArguments": null,
                      "start": 75,
                      "end": 85
                    },
                    "start": 73,
                    "end": 85
                  },
                  "start": 66,
                  "end": 85
                }
              ],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 90,
                    "end": 97
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 98,
                    "end": 101
                  },
                  "optional": false,
                  "computed": false,
                  "start": 90,
                  "end": 101
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "Got message \"",
                          "cooked": "Got message \""
                        },
                        "tail": false,
                        "start": 102,
                        "end": 118
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "\"",
                          "cooked": "\""
                        },
                        "tail": true,
                        "start": 121,
                        "end": 124
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 118,
                        "end": 121
                      }
                    ],
                    "start": 102,
                    "end": 124
                  }
                ],
                "optional": false,
                "start": 90,
                "end": 125
              },
              "id": null,
              "generator": false,
              "start": 65,
              "end": 125
            },
            "definite": false,
            "start": 52,
            "end": 125
          }
        ],
        "declare": false,
        "start": 46,
        "end": 126
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 39,
      "end": 126
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 152
      },
      "exportKind": "value",
      "start": 127,
      "end": 153
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 153
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "MyFunction",
    "start": 10,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 23,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 39,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 46,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "MyFunction",
    "start": 52,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
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
    "value": "MyFunction",
    "start": 75,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 87,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 90,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 98,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Template",
    "value": "`Got message \"${",
    "start": 102,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 118,
    "end": 121
  },
  {
    "type": "Template",
    "value": "}\"`",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 127,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 134,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "MyFunction",
    "start": 142,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  }
]
```
