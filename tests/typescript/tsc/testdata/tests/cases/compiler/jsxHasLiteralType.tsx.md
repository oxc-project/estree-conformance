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
            "start": 54,
            "end": 59
          },
          "start": 49,
          "end": 59
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 65,
        "end": 72
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 42,
      "end": 73
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 90
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 98
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 101,
                      "end": 104
                    },
                    "start": 101,
                    "end": 104
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 107,
                      "end": 110
                    },
                    "start": 107,
                    "end": 110
                  }
                ],
                "start": 101,
                "end": 110
              },
              "start": 99,
              "end": 110
            },
            "accessibility": null,
            "static": false,
            "start": 97,
            "end": 111
          }
        ],
        "start": 91,
        "end": 113
      },
      "declare": false,
      "start": 75,
      "end": 113
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 131
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
              "start": 132,
              "end": 133
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 147
              },
              "typeArguments": null,
              "start": 142,
              "end": 147
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 150,
                "end": 155
              },
              "typeArguments": null,
              "start": 150,
              "end": 155
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 132,
            "end": 155
          }
        ],
        "start": 131,
        "end": 156
      },
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 170
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 171,
          "end": 180
        },
        "optional": false,
        "computed": false,
        "start": 165,
        "end": 180
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
              "start": 181,
              "end": 182
            },
            "typeArguments": null,
            "start": 181,
            "end": 182
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 184,
            "end": 186
          }
        ],
        "start": 180,
        "end": 187
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 188,
        "end": 190
      },
      "abstract": false,
      "declare": false,
      "start": 114,
      "end": 190
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 197,
            "end": 198
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MyComponent",
                "start": 202,
                "end": 213
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 214,
                    "end": 215
                  },
                  "value": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 216,
                    "end": 219
                  },
                  "start": 214,
                  "end": 219
                }
              ],
              "selfClosing": true,
              "start": 201,
              "end": 221
            },
            "children": [],
            "closingElement": null,
            "start": 201,
            "end": 221
          },
          "definite": false,
          "start": 197,
          "end": 221
        }
      ],
      "declare": false,
      "start": 191,
      "end": 221
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 42,
  "end": 221
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
    "value": "*",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 51,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 54,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 60,
    "end": 64
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 65,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 75,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 85,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 101,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 105,
    "end": 106
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 107,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 114,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "MyComponent",
    "start": 120,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 134,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 142,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 150,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 157,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 165,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 171,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 191,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 201,
    "end": 202
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComponent",
    "start": 202,
    "end": 213
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 215,
    "end": 216
  },
  {
    "type": "JSXText",
    "value": "\"a\"",
    "start": 216,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 220,
    "end": 221
  }
]
```
