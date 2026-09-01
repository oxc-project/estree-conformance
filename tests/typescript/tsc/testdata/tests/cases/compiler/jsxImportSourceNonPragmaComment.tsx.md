__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "css",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 128
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "css",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 128
          },
          "importKind": "value",
          "start": 125,
          "end": 128
        }
      ],
      "source": {
        "type": "Literal",
        "value": "@emotion/react",
        "raw": "\"@emotion/react\"",
        "start": 136,
        "end": 152
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 116,
      "end": 153
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 179,
          "end": 188
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
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "input",
                    "start": 209,
                    "end": 214
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "css",
                        "start": 221,
                        "end": 224
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "TaggedTemplateExpression",
                          "tag": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "css",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 226,
                            "end": 229
                          },
                          "typeArguments": null,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "\n        color: red;\n      ",
                                  "cooked": "\n        color: red;\n      "
                                },
                                "tail": true,
                                "start": 229,
                                "end": 258
                              }
                            ],
                            "expressions": [],
                            "start": 229,
                            "end": 258
                          },
                          "start": 226,
                          "end": 258
                        },
                        "start": 225,
                        "end": 259
                      },
                      "start": 221,
                      "end": 259
                    }
                  ],
                  "selfClosing": true,
                  "start": 208,
                  "end": 266
                },
                "children": [],
                "closingElement": null,
                "start": 208,
                "end": 266
              },
              "start": 195,
              "end": 271
            }
          ],
          "start": 191,
          "end": 273
        },
        "expression": false,
        "start": 170,
        "end": 273
      },
      "exportKind": "value",
      "start": 155,
      "end": 273
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 116,
  "end": 273
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 116,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "css",
    "start": 125,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 131,
    "end": 135
  },
  {
    "type": "String",
    "value": "\"@emotion/react\"",
    "start": 136,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 155,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 162,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 170,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 179,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 195,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 208,
    "end": 209
  },
  {
    "type": "JSXIdentifier",
    "value": "input",
    "start": 209,
    "end": 214
  },
  {
    "type": "JSXIdentifier",
    "value": "css",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "css",
    "start": 226,
    "end": 229
  },
  {
    "type": "Template",
    "value": "`\n        color: red;\n      `",
    "start": 229,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 272,
    "end": 273
  }
]
```
