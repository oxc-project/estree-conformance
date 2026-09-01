__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 202
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 210
            },
            "optional": false,
            "computed": false,
            "start": 196,
            "end": 210
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 212
          },
          "optional": false,
          "computed": false,
          "start": 196,
          "end": 212
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 222
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
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
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 226
                },
                "typeAnnotation": null,
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 229,
                  "end": 230
                },
                "computed": false,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 224,
                "end": 231
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "self",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 232,
                  "end": 236
                },
                "typeAnnotation": null,
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 243,
                    "end": 244
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 239,
                  "end": 246
                },
                "computed": false,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 232,
                "end": 247
              }
            ],
            "start": 223,
            "end": 248
          },
          "abstract": false,
          "declare": false,
          "start": 215,
          "end": 248
        },
        "start": 196,
        "end": 248
      },
      "directive": null,
      "start": 196,
      "end": 248
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 196,
  "end": 248
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "module",
    "start": 196,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 203,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 215,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 224,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 227,
    "end": 228
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 232,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 239,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248
  }
]
```
