__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "VFile",
          "optional": false,
          "typeAnnotation": null,
          "start": 70,
          "end": 75
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 123
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 139,
                        "end": 141
                      },
                      "start": 132,
                      "end": 141
                    }
                  ],
                  "start": 126,
                  "end": 145
                },
                "expression": false,
                "start": 123,
                "end": 145
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 115,
              "end": 145
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 201
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "path",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 206
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 208,
                  "end": 213
                },
                "expression": false,
                "start": 201,
                "end": 213
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 193,
              "end": 213
            }
          ],
          "start": 76,
          "end": 215
        },
        "abstract": false,
        "declare": false,
        "start": 64,
        "end": 215
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 215
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 215
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 57,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 64,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "VFile",
    "start": 70,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 115,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
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
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 132,
    "end": 138
  },
  {
    "type": "String",
    "value": "''",
    "start": 139,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 193,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 197,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 202,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  }
]
```
