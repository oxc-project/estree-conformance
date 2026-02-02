__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 17
          },
          "start": 7,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 23,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyComp",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 59
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 61
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 60,
              "end": 61
            }
          ],
          "start": 59,
          "end": 62
        },
        "superClass": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 76
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 86
          },
          "optional": false,
          "computed": false,
          "start": 71,
          "end": 86
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 88
              },
              "typeArguments": null,
              "start": 87,
              "end": 88
            },
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 90,
              "end": 92
            }
          ],
          "start": 86,
          "end": 93
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "internalProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 112
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 114,
                    "end": 115
                  },
                  "typeArguments": null,
                  "start": 114,
                  "end": 115
                },
                "start": 112,
                "end": 115
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 100,
              "end": 116
            }
          ],
          "start": 94,
          "end": 118
        },
        "abstract": false,
        "declare": true,
        "start": 39,
        "end": 118
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 32,
      "end": 118
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Prop",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 141
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 149
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 151,
                  "end": 157
                },
                "start": 149,
                "end": 157
              },
              "accessibility": null,
              "static": false,
              "start": 148,
              "end": 158
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 164
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 166,
                  "end": 172
                },
                "start": 164,
                "end": 172
              },
              "accessibility": null,
              "static": false,
              "start": 163,
              "end": 172
            }
          ],
          "start": 142,
          "end": 174
        },
        "declare": false,
        "start": 127,
        "end": 174
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 120,
      "end": 174
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 175
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
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 12,
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
    "value": "\"react\"",
    "start": 23,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 32,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 39,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 47,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "MyComp",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 63,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 71,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 77,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "internalProp",
    "start": 100,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 120,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 127,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 137,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 151,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 166,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyComp",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 57
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyComp",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 57
          },
          "importKind": "value",
          "start": 51,
          "end": 57
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 63
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 63
          },
          "importKind": "value",
          "start": 59,
          "end": 63
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./component",
        "raw": "\"./component\"",
        "start": 71,
        "end": 84
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 42,
      "end": 85
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 103
          },
          "start": 93,
          "end": 103
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 109,
        "end": 116
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 86,
      "end": 117
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 124
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MyComp",
                "start": 128,
                "end": 134
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 135,
                      "end": 139
                    },
                    "typeArguments": null,
                    "start": 135,
                    "end": 139
                  }
                ],
                "start": 134,
                "end": 140
              },
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 141,
                    "end": 142
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 144,
                      "end": 146
                    },
                    "start": 143,
                    "end": 147
                  },
                  "start": 141,
                  "end": 147
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 148,
                    "end": 149
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 150,
                    "end": 154
                  },
                  "start": 148,
                  "end": 154
                }
              ],
              "selfClosing": true,
              "start": 127,
              "end": 157
            },
            "children": [],
            "closingElement": null,
            "start": 127,
            "end": 157
          },
          "definite": false,
          "start": 123,
          "end": 157
        }
      ],
      "declare": false,
      "start": 119,
      "end": 158
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 42,
  "end": 192
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "MyComp",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 59,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 66,
    "end": 70
  },
  {
    "type": "String",
    "value": "\"./component\"",
    "start": 71,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 95,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 98,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 104,
    "end": 108
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 109,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 119,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 127,
    "end": 128
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComp",
    "start": 128,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 135,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 139,
    "end": 140
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 141,
    "end": 142
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
    "start": 143,
    "end": 144
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 144,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 150,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  }
]
```
