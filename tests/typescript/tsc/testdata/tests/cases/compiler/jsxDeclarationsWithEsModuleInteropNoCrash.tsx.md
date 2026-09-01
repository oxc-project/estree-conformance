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
            "name": "PropTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 76
          },
          "start": 67,
          "end": 76
        }
      ],
      "source": {
        "type": "Literal",
        "value": "prop-types",
        "raw": "'prop-types'",
        "start": 82,
        "end": 94
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 60,
      "end": 95
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 108
          },
          "start": 103,
          "end": 108
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 114,
        "end": 121
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 96,
      "end": 122
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
            "name": "propTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 139
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
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 149
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 151,
                    "end": 160
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bool",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 165
                  },
                  "optional": false,
                  "computed": false,
                  "start": 151,
                  "end": 165
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 146,
                "end": 165
              }
            ],
            "start": 142,
            "end": 168
          },
          "definite": false,
          "start": 130,
          "end": 168
        }
      ],
      "declare": false,
      "start": 124,
      "end": 169
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
            "name": "defaultProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 189
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
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 199
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 201,
                  "end": 206
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 196,
                "end": 206
              }
            ],
            "start": 192,
            "end": 209
          },
          "definite": false,
          "start": 177,
          "end": 209
        }
      ],
      "declare": false,
      "start": 171,
      "end": 210
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 224
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 227,
                "end": 230
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 227,
                "end": 230
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 227,
              "end": 230
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 225,
          "end": 232
        }
      ],
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
                  "name": "div",
                  "start": 246,
                  "end": 249
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 245,
                "end": 250
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 251,
                    "end": 254
                  },
                  "start": 250,
                  "end": 255
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 257,
                  "end": 260
                },
                "start": 255,
                "end": 261
              },
              "start": 245,
              "end": 261
            },
            "start": 238,
            "end": 262
          }
        ],
        "start": 234,
        "end": 264
      },
      "expression": false,
      "start": 212,
      "end": 264
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 269
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "propTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 279
          },
          "optional": false,
          "computed": false,
          "start": 266,
          "end": 279
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "propTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 282,
          "end": 291
        },
        "start": 266,
        "end": 291
      },
      "directive": null,
      "start": 266,
      "end": 292
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 296
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 309
          },
          "optional": false,
          "computed": false,
          "start": 293,
          "end": 309
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "defaultProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 324
        },
        "start": 293,
        "end": 324
      },
      "directive": null,
      "start": 293,
      "end": 325
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 342,
        "end": 345
      },
      "exportKind": "value",
      "start": 327,
      "end": 346
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 60,
  "end": 346
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 60,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 67,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 77,
    "end": 81
  },
  {
    "type": "String",
    "value": "'prop-types'",
    "start": 82,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 96,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 103,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 109,
    "end": 113
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 114,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 124,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "propTypes",
    "start": 130,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
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
    "value": "bar",
    "start": 146,
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
    "value": "PropTypes",
    "start": 151,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 161,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 171,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 177,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 196,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 201,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 212,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "bar",
    "start": 227,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 245,
    "end": 246
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 246,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 251,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 256,
    "end": 257
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 257,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 266,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "propTypes",
    "start": 270,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "propTypes",
    "start": 282,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 293,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 297,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 312,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 327,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 334,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 342,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  }
]
```
