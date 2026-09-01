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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "hdr",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 16,
                    "end": 22
                  },
                  "start": 14,
                  "end": 22
                },
                "start": 11,
                "end": 22
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 29,
                    "end": 35
                  },
                  "start": 27,
                  "end": 35
                },
                "start": 24,
                "end": 35
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 40,
                    "end": 43
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": ":\\t",
                      "cooked": ":\t"
                    },
                    "tail": false,
                    "start": 46,
                    "end": 52
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\\r\\n",
                      "cooked": "\r\n"
                    },
                    "tail": true,
                    "start": 55,
                    "end": 61
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hdr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 43,
                    "end": 46
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 55
                  }
                ],
                "start": 40,
                "end": 61
              },
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
                    "start": 65,
                    "end": 68
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": ":\\t",
                      "cooked": ":\t"
                    },
                    "tail": false,
                    "start": 74,
                    "end": 80
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\\r\\n",
                      "cooked": "\r\n"
                    },
                    "tail": true,
                    "start": 86,
                    "end": 92
                  }
                ],
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 68,
                    "end": 74
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 80,
                    "end": 86
                  }
                ],
                "start": 65,
                "end": 92
              },
              "start": 40,
              "end": 92
            },
            "id": null,
            "generator": false,
            "start": 10,
            "end": 92
          },
          "definite": false,
          "start": 6,
          "end": 92
        }
      ],
      "declare": false,
      "start": 0,
      "end": 93
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 96
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "x",
              "raw": "\"x\"",
              "start": 97,
              "end": 100
            }
          ],
          "optional": false,
          "start": 95,
          "end": 101
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 102,
          "end": 105
        },
        "optional": false,
        "computed": false,
        "start": 95,
        "end": 105
      },
      "directive": null,
      "start": 95,
      "end": 106
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 106
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "hdr",
    "start": 11,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 16,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 24,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 37,
    "end": 39
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 40,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "hdr",
    "start": 43,
    "end": 46
  },
  {
    "type": "Template",
    "value": "}:\\t${",
    "start": 46,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 52,
    "end": 55
  },
  {
    "type": "Template",
    "value": "}\\r\\n`",
    "start": 55,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 62,
    "end": 64
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 65,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 68,
    "end": 74
  },
  {
    "type": "Template",
    "value": "}:\\t${",
    "start": 74,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 80,
    "end": 86
  },
  {
    "type": "Template",
    "value": "}\\r\\n`",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 95,
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
    "value": "\"x\"",
    "start": 97,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
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
    "value": "foo",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  }
]
```
