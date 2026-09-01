__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Parent",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
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
              "type": "PrivateIdentifier",
              "name": "foo",
              "start": 19,
              "end": 23
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 26,
              "end": 27
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 19,
            "end": 28
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "bar",
              "start": 40,
              "end": 44
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 47,
              "end": 48
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 33,
            "end": 49
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "accessChildProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 70
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Child",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 87,
                          "end": 92
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 83,
                        "end": 94
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "foo",
                        "start": 95,
                        "end": 99
                      },
                      "optional": false,
                      "computed": false,
                      "start": 83,
                      "end": 99
                    },
                    "directive": null,
                    "start": 83,
                    "end": 100
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Child",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 184,
                        "end": 189
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "bar",
                        "start": 190,
                        "end": 194
                      },
                      "optional": false,
                      "computed": false,
                      "start": 184,
                      "end": 194
                    },
                    "directive": null,
                    "start": 184,
                    "end": 195
                  }
                ],
                "start": 73,
                "end": 227
              },
              "expression": false,
              "start": 70,
              "end": 227
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 54,
            "end": 227
          }
        ],
        "start": 13,
        "end": 229
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 229
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Child",
        "optional": false,
        "typeAnnotation": null,
        "start": 237,
        "end": 242
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Parent",
        "optional": false,
        "typeAnnotation": null,
        "start": 251,
        "end": 257
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "start": 264,
              "end": 268
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 271,
              "end": 276
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 264,
            "end": 277
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "bar",
              "start": 367,
              "end": 371
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 374,
              "end": 379
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 367,
            "end": 380
          }
        ],
        "start": 258,
        "end": 394
      },
      "abstract": false,
      "declare": false,
      "start": 231,
      "end": 394
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 394
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Parent",
    "start": 6,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 19,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 24,
    "end": 25
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 33,
    "end": 39
  },
  {
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 40,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "accessChildProps",
    "start": 54,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 83,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Child",
    "start": 87,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 94,
    "end": 95
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 95,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "Child",
    "start": 184,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 189,
    "end": 190
  },
  {
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 231,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "Child",
    "start": 237,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 243,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "Parent",
    "start": 251,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 264,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 269,
    "end": 270
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 271,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 367,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 372,
    "end": 373
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 374,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  }
]
```
