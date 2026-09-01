__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 60,
        "end": 67
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Attributes",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 94
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTemplateLiteralType",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "do-",
                                "cooked": "do-"
                              },
                              "tail": false,
                              "start": 111,
                              "end": 117
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 123,
                              "end": 125
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 117,
                              "end": 123
                            }
                          ],
                          "start": 111,
                          "end": 125
                        },
                        "start": 109,
                        "end": 125
                      },
                      "start": 106,
                      "end": 125
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Function",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 128,
                        "end": 136
                      },
                      "typeArguments": null,
                      "start": 128,
                      "end": 136
                    },
                    "start": 126,
                    "end": 136
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 105,
                  "end": 137
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "ns:thing",
                    "raw": "\"ns:thing\"",
                    "start": 146,
                    "end": 156
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 159,
                      "end": 165
                    },
                    "start": 157,
                    "end": 165
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 146,
                  "end": 166
                }
              ],
              "start": 95,
              "end": 172
            },
            "declare": false,
            "start": 74,
            "end": 172
          }
        ],
        "start": 68,
        "end": 174
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 45,
      "end": 174
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
              "name": "tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 192
            },
            "init": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 196,
                  "end": 199
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXNamespacedName",
                      "namespace": {
                        "type": "JSXIdentifier",
                        "name": "ns",
                        "start": 200,
                        "end": 202
                      },
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "thing",
                        "start": 203,
                        "end": 208
                      },
                      "start": 200,
                      "end": 208
                    },
                    "value": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 209,
                      "end": 212
                    },
                    "start": 200,
                    "end": 212
                  }
                ],
                "selfClosing": true,
                "start": 195,
                "end": 214
              },
              "children": [],
              "closingElement": null,
              "start": 195,
              "end": 214
            },
            "definite": false,
            "start": 189,
            "end": 214
          }
        ],
        "declare": false,
        "start": 183,
        "end": 214
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 176,
      "end": 214
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 214
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 45,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 53,
    "end": 59
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 60,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 74,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "Attributes",
    "start": 84,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Template",
    "value": "`do-${",
    "start": 111,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 117,
    "end": 123
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 123,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 128,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "String",
    "value": "\"ns:thing\"",
    "start": 146,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 159,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 176,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 183,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 195,
    "end": 196
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 196,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 200,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 203,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209
  },
  {
    "type": "JSXText",
    "value": "\"a\"",
    "start": 209,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 213,
    "end": 214
  }
]
```
